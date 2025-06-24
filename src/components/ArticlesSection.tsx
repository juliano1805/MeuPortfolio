import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Loader2, ExternalLink, Tag } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { useIsMobile } from '@/hooks/use-mobile';

interface Article {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  tags: string[];
  url: string;
}

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 640;
}

// Componente filho para animação fade-in garantida
function ArticleCard({ article, index, mobile, visible, animationClass, delay, visibleItemsCount }) {
  const cardRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (mobile) {
      setTimeout(() => setFadeIn(true), 50 + index * 80);
    }
  }, [mobile]);
  const shouldBeVisible = mobile || visibleItemsCount === 0 || visible;
  const cardClass = mobile
    ? `bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift opacity-0 ${fadeIn ? 'animate-fade-in opacity-100' : ''}`
    : `bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift ${shouldBeVisible ? animationClass : 'opacity-0'}`;
  return (
    <article
      key={article.id}
      data-index={index}
      ref={cardRef}
      className={cardClass}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2 text-tech-blue group-hover:text-tech-green transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground mb-2 text-base leading-relaxed">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {article.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-1" />
          {article.publishedDate}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:text-tech-green font-semibold flex items-center gap-1">
          Ler artigo <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  const { containerRef, visibleItems } = useStaggerAnimation(articles, { triggerOnce: false });

  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Primeiro tenta buscar do arquivo local
        let response = await fetch('/MeuPortfolio/data/articles.json');
        
        if (!response.ok) {
          // Se falhar, tenta buscar diretamente do Super.so
          console.log('Arquivo local não encontrado, tentando buscar do Super.so...');
          
          // Tenta buscar do Super.so usando a API
          try {
            const superResponse = await fetch('https://julianomatheusblog.super.site/api/articles');
            if (superResponse.ok) {
              const superData = await superResponse.json();
              const formattedArticles = superData.map((article: any) => ({
                id: article.id,
                title: article.title,
                description: article.description,
                coverImage: article.cover_image,
                publishedDate: article.published_date,
                tags: article.tags || [],
                url: article.url
              }));
              setArticles(formattedArticles.slice(0, 3));
              setError(null);
              return;
            }
          } catch (superError) {
            console.error('Erro ao buscar do Super.so:', superError);
          }
          
          // Se ambos falharem, usa dados estáticos como fallback
          console.log('Usando dados estáticos como fallback...');
          const fallbackArticles = [
            {
              id: "1",
              title: "T.E.T.E.U IA - Assistente de Código Multiplataforma",
              description: "Desenvolvimento de um assistente de programação em Python que integra múltiplas IAs para análise e sugestões de código.",
              coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6bd242a0-b690-42c3-80ae-f7c5d14751db/T.E.T.E.U/w=1920,quality=90,fit=scale-down",
              publishedDate: "26 de Maio, 2024",
              tags: ["Python", "IA", "Desenvolvimento"],
              url: "https://julianomatheusblog.super.site/teteu-ia"
            },
            {
              id: "2",
              title: "Pipeline MLOps - THEMIS",
              description: "Desenvolvimento de um pipeline completo de Machine Learning para detecção de fraudes, com foco em produção e boas práticas.",
              coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a777746-05f8-4ce6-9cd8-21bdd71ccc59/THEMIS/w=1920,quality=90,fit=scale-down",
              publishedDate: "12 de Maio, 2024",
              tags: ["MLOps", "Machine Learning", "DevOps"],
              url: "https://julianomatheusblog.super.site/pipeline-mlops-themis"
            }
          ];
          setArticles(fallbackArticles);
          setError(null);
          return;
        }
        
        const data = await response.json();
        setArticles(data.articles.slice(0, 3));
        setError(null);
      } catch (error) {
        console.error('Erro ao carregar artigos:', error);
        setError('Não foi possível carregar os artigos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section id="articles" className="py-20 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="text-muted-foreground mt-4">Carregando artigos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="articles" className="py-20 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-destructive">Erro: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-16 sm:py-20 px-5 pt-8 pb-8">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">Artigos Recentes</span>
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground text-center mb-6">
        Compartilhando conhecimento e insights sobre Engenharia de Dados, MLOps e desenvolvimento de software.
      </p>
      <div className="container mx-auto px-4">
        {articles.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground">Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible"
          >
            {articles.map((article, index) => {
              const animationClass = isMobile ? 'animate-fade-in duration-300' : 'animate-in';
              const delay = isMobile ? Math.min(index * 100, 100) : index * 200;
              return (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                  mobile={isMobile}
                  visible={visibleItems.has(index)}
                  animationClass={animationClass}
                  delay={delay}
                  visibleItemsCount={visibleItems.size}
                />
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group hover-lift border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background"
            onClick={() => window.open('https://julianomatheusblog.super.site', '_blank')}
          >
            Ver Todos os Artigos
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
