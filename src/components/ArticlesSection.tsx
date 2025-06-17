import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getArticles } from '@/lib/super';
import { ArrowRight, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles.slice(0, 3)); // Pegando os 3 artigos mais recentes
      } catch (error) {
        console.error('Erro ao buscar artigos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    // Atualiza os artigos a cada 5 minutos
    const interval = setInterval(fetchArticles, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">Artigos Recentes</h2>
          <p className="text-muted-foreground max-w-2xl">
            Compartilhando conhecimento sobre Engenharia de Dados, MLOps e desenvolvimento de software.
          </p>
        </div>

        {loading ? (
          <div className="text-center">Carregando artigos...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <CardHeader>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="object-cover object-bottom w-full h-full"
                    />
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {article.description}
                  </CardDescription>
                  {article.publishedDate && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.publishedDate}</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Ler artigo
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://julianomatheusblog.super.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
