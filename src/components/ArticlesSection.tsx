import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mlopsImage from '@/assets/images/mlops-pipeline.jpg';
import teteuImage from '@/assets/images/teteu-new.png.jpg';

const ArticlesSection = () => {
  const articles = [
    {
      title: 'T.E.T.E.U IA',
      excerpt: 'Assistente de programação em Python que integra múltiplas IAs (OpenAI, Cohere, Hugging Face) para responder dúvidas, analisar códigos e sugerir projetos.',
      date: '2023-12-07',
      readTime: '5 min',
      category: 'Inteligência Artificial',
      image: teteuImage,
      tags: ['Python', 'OpenAI', 'Cohere', 'Hugging Face'],
      url: 'https://julianomatheusblog.super.site/t-e-t-e-u-ia'
    },
    {
      title: 'Pipeline MLOPs - THEMIS',
      excerpt: 'Pipeline completa de MLOps para detecção de fraudes em transações financeiras, implementando boas práticas de produção, automação e rastreabilidade.',
      date: '2023-10-11',
      readTime: '8 min',
      category: 'Machine Learning',
      image: mlopsImage,
      tags: ['Python', 'MLflow', 'Flask', 'Prometheus'],
      url: 'https://julianomatheusblog.super.site/pipeline-mlops-themis'
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Artigos e insights sobre meus projetos e experiências com dados e IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-tech-blue/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-[center_90%] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-tech-blue/20 text-tech-blue text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-tech-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-tech-gray-800 text-tech-blue text-xs rounded border border-tech-gray-700 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tech-blue hover:text-tech-green transition-colors"
                >
                  Ler mais
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
