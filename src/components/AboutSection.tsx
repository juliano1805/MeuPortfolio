import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import { Database, Brain, Code, Cloud, BarChart3, Zap } from 'lucide-react';
import AnimatedSVGIcon from '@/components/ui/AnimatedSVGIcon';
import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });

  const expertiseAreas = [
    {
      icon: Database,
      title: "Engenharia de Dados",
      description: "Desenvolvimento de pipelines de dados escaláveis, ETL/ELT, data warehousing e arquiteturas de dados modernas."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Desenvolvimento de modelos de ML, feature engineering, avaliação de modelos e implementação de soluções de IA."
    },
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Desenvolvimento full-stack, APIs RESTful, microsserviços e aplicações web modernas."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploy em cloud (AWS, GCP), containerização com Docker, orquestração com Kubernetes e CI/CD."
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Análise exploratória, visualização de dados, dashboards interativos e business intelligence."
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Automação de processos, workflows, integração de sistemas e otimização de operações."
    }
  ];
  
  const { containerRef, visibleItems } = useStaggerAnimation(expertiseAreas, { triggerOnce: false });

  const mobile = useIsMobile();

  // Componente filho para animação fade-in garantida
  function AboutCard({ area, index, mobile, visible, animationClass, delay, visibleItemsCount }) {
    const cardRef = useRef(null);
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
      if (mobile) {
        setFadeIn(true);
      }
    }, [mobile]);
    const shouldBeVisible = mobile || visibleItemsCount === 0 || visible;
    const cardClass = mobile
      ? `group bg-card border border-border rounded-lg p-4 sm:p-6 shadow-lg card-stagger hover-lift ${fadeIn ? 'opacity-100' : 'opacity-0'}`
      : `group bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift ${shouldBeVisible ? animationClass : 'opacity-0'}`;
    return (
      <div
        key={area.title}
        data-index={index}
        ref={cardRef}
        className={cardClass}
        style={{ animationDelay: mobile ? '0ms' : `${delay}ms` }}
      >
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="p-3 bg-tech-blue/20 rounded-lg group-hover:bg-tech-blue/30 transition-colors duration-300">
            <AnimatedSVGIcon 
              IconComponent={area.icon}
              isVisible={true}
              size={24}
              className="text-tech-blue"
              animationDelay={index * 150 + 200}
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4 text-foreground">{area.title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{area.description}</p>
      </div>
    );
  }

  return (
    <section id="about" className="py-16 sm:py-20 px-5 pt-8 pb-8 relative bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">Sobre Mim</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-6">
            Engenheiro de Dados apaixonado por transformar dados em insights valiosos através de soluções inovadoras em Machine Learning e automação.
          </p>
        </div>

        {/* Grade de Habilidades */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-visible"
        >
          {expertiseAreas.map((area, index) => {
            const animationClass = mobile ? 'animate-fade-in duration-300' : 'animate-in';
            const delay = mobile ? Math.min(index * 100, 100) : index * 150;
            return (
              <AboutCard
                key={area.title}
                area={area}
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

        {/* Seção de Estatísticas Animadas */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Anos de Experiência", color: "text-tech-blue" },
              { number: "15+", label: "Projetos Concluídos", color: "text-tech-green" },
              { number: "99%", label: "Satisfação do Cliente", color: "text-tech-purple" },
              { number: "24/7", label: "Disponibilidade", color: "text-tech-orange" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center group hover-lift animate-float`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
