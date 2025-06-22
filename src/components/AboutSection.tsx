import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import { Database, Brain, Code, Cloud, BarChart3, Zap } from 'lucide-react';
import AnimatedSVGIcon from '@/components/ui/AnimatedSVGIcon';

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

  return (
    <section id="about" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Minhas Habilidades
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Engenheiro de Dados apaixonado por transformar dados em insights valiosos através de soluções inovadoras em Machine Learning e automação.
          </p>
        </div>

        {/* Grade de Habilidades */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                data-index={index}
                className={`group bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift ${
                  visibleItems.has(index) ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-tech-blue/20 rounded-lg group-hover:bg-tech-blue/30 transition-colors duration-300">
                    <AnimatedSVGIcon 
                      IconComponent={area.icon}
                      isVisible={visibleItems.has(index)}
                      size={24}
                      className="text-tech-blue"
                      animationDelay={index * 150 + 200}
                    />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-foreground">{area.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
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
