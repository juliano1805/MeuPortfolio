import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import mlopsImage from '@/assets/images/mlops-pipeline.jpg';
import teteuImage from '@/assets/images/teteu-new.png.jpg';
import portfolioImage from '@/assets/images/portfolio.jpg';

const FeaturedProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Portfólio Profissional",
      description: "Portfólio moderno e responsivo desenvolvido com React e TypeScript, demonstrando projetos e experiências em Engenharia de Dados e MLOps. Implementa boas práticas de desenvolvimento web, SEO e performance.",
      image: teteuImage,
      imagePosition: "object-center",
      metrics: "100% de performance no Lighthouse",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
      link: "https://github.com/juliano1805/MeuPortfolio",
      isExternal: true,
      internalLink: "/projects/portfolio",
      highlights: [
        "Design moderno e responsivo",
        "Otimização para SEO",
        "Deploy automatizado com GitHub Actions",
        "Animações suaves e interativas",
        "Tema escuro por padrão"
      ]
    },
    {
      title: "Pipeline MLOps - Detecção de Fraudes",
      description: "Pipeline completa de MLOps para detecção de fraudes em transações financeiras, implementando boas práticas de produção, automação e rastreabilidade. Projeto que demonstra expertise em engenharia de ML em produção, com métricas impressionantes de precisão (99.95%) e recall (78.57%).",
      image: mlopsImage,
      imagePosition: "object-[center_10%]",
      metrics: "99.95% de precisão na detecção",
      technologies: ["MLflow", "Flask", "Prometheus", "GitHub Actions", "Docker"],
      link: "https://github.com/juliano1805/Pipeline-MLOPs-Themis",
      isExternal: true,
      internalLink: "/projects/mlops-pipeline",
      highlights: [
        "Pipeline completa de ML em produção",
        "CI/CD automatizado com GitHub Actions",
        "Monitoramento em tempo real com Prometheus",
        "Testes automatizados com Pytest",
        "Documentação técnica detalhada"
      ]
    },
    {
      title: "TETEU IA",
      description: "Assistente de programação em Python que integra múltiplas IAs (OpenAI, Cohere, Hugging Face) para responder dúvidas, analisar códigos, sugerir projetos e muito mais. Projeto desenvolvido individualmente com foco em automação e integração de APIs de IA.",
      image: teteuImage,
      imagePosition: "object-[center_5%]",
      metrics: "3+ APIs de IA integradas",
      technologies: ["Python", "OpenAI", "Cohere", "Hugging Face", "SQLite"],
      link: "https://github.com/juliano1805/teteu-ia",
      isExternal: true,
      internalLink: "/projects/teteu-ia",
      highlights: [
        "Análise automática de código com múltiplos linters",
        "Sistema de gamificação com quizzes e ranking",
        "Exportação de histórico para Jupyter Notebook",
        "Integração com Stack Overflow e GitHub",
        "Notificações e tradução automática"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Projetos que demonstram minha expertise em MLOps e desenvolvimento de soluções de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-tech-blue/50 transition-all duration-300 animate-slide-up h-[750px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-full flex flex-col">
                <div className="relative h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                </div>
                <div className="flex-1 p-6 flex flex-col overflow-y-auto">
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-base leading-relaxed">{project.description}</p>
                  {project.highlights && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="leading-relaxed">{highlight}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-tech-blue/20 text-tech-blue text-sm rounded-lg font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-tech-green font-mono text-base">
                      {project.metrics}
                    </span>
                    <div className="flex gap-2">
                      {project.isExternal && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="group-hover:text-tech-blue text-base px-4">
                            Ver no GitHub
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      )}
                      {project.internalLink && (
                        <Link to={project.internalLink}>
                          <Button variant="ghost" className="group-hover:text-tech-blue text-base px-4">
                            Ver Detalhes
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection; 