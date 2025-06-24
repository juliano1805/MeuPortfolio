import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '@/hooks/use-scroll-animation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import mlopsImage from '@/assets/images/mlops-pipeline.jpg';
import teteuImage from '@/assets/images/teteu-new.png.jpg';
import portfolioImage from '@/assets/images/portfolio.jpg';
import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FeaturedProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Portfólio Profissional",
      description: "Portfólio moderno e responsivo desenvolvido com React e TypeScript, demonstrando projetos e experiências em Engenharia de Dados e MLOps. Implementa boas práticas de desenvolvimento web, SEO e performance.",
      image: portfolioImage,
      imagePosition: "object-top",
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

  const { containerRef, visibleItems } = useStaggerAnimation(featuredProjects, { triggerOnce: false });
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
  const mobile = useIsMobile();

  // Componente filho para animação fade-in garantida
  function FeaturedProjectCard({ project, index, mobile, visible, animationClass, delay, visibleItemsCount }) {
    const cardRef = useRef(null);
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
      if (mobile) {
        setFadeIn(true);
      }
    }, [mobile]);
    const shouldBeVisible = mobile || visibleItemsCount === 0 || visible;
    const cardClass = mobile
      ? `group bg-card border border-border rounded-lg overflow-hidden hover:border-tech-blue/50 transition-all duration-500 card-stagger h-[750px] ${fadeIn ? 'opacity-100' : 'opacity-0'}`
      : `group bg-card border border-border rounded-lg overflow-hidden hover:border-tech-blue/50 transition-all duration-500 card-stagger h-[750px] ${shouldBeVisible ? animationClass : 'opacity-0'}`;
    return (
      <div
        key={project.title}
        data-index={index}
        ref={cardRef}
        className={cardClass}
        style={{ animationDelay: mobile ? '0ms' : `${delay}ms` }}
      >
        <div className="relative overflow-hidden h-full flex flex-col">
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 h-full w-full group-hover:scale-110 transition-transform duration-700">
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-cover ${project.imagePosition || 'object-top'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            </div>
            
            {/* Overlay com efeito de hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="flex-1 p-6 flex flex-col overflow-y-auto">
            <h3 className="text-3xl font-bold mb-3 group-hover:text-tech-blue transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              {project.description}
            </p>
            
            {project.highlights && (
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-tech-blue/20 text-tech-blue text-sm rounded-lg font-mono hover:bg-tech-blue/30 transition-colors duration-300"
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
                    <Button variant="ghost" className="group-hover:text-tech-blue text-base px-4 hover-glow">
                      Ver no GitHub
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                )}
                {project.internalLink && (
                  <Link to={project.internalLink}>
                    <Button variant="ghost" className="group-hover:text-tech-blue text-base px-4 hover-glow">
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
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-5 pt-8 pb-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="tech-grid absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate-scale ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-6">
            Projetos que demonstram minha expertise em MLOps e desenvolvimento de soluções de IA.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-visible">
          {featuredProjects.map((project, index) => {
            const animationClass = mobile ? 'animate-fade-in duration-300' : 'animate-in';
            const delay = mobile ? Math.min(index * 100, 100) : index * 200;
            return (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={index}
                mobile={mobile}
                visible={visibleItems.has(index)}
                animationClass={animationClass}
                delay={delay}
                visibleItemsCount={visibleItems.size}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection; 