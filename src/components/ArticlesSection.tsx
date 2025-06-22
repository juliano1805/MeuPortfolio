import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Loader2, ExternalLink, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import LoadingSpinner from '@/components/ui/loading-spinner';

interface Article {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  tags: string[];
  url: string;
}

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  const { containerRef, visibleItems } = useStaggerAnimation(articles, { triggerOnce: false });

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
    <section id="articles" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Artigos Recentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Compartilhando conhecimento e insights sobre Engenharia de Dados, MLOps e desenvolvimento de software.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground">Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <article
                key={article.id}
                data-index={index}
                className={`bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift ${
                  visibleItems.has(index) ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.publishedDate}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-tech-blue transition-colors">
                    {article.title}
                  </h3>
                  
                  {article.description && (
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded-full font-mono"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tech-blue hover:text-tech-green transition-colors group-hover:translate-x-1"
                  >
                    <span className="mr-2">Ler artigo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
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
