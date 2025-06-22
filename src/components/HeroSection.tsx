import { ArrowRight, Github, Linkedin, Mail, Briefcase, PackageCheck, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useParallax } from '@/hooks/use-parallax';
import TypewriterEffect from '@/components/TypewriterEffect';

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.5, triggerOnce: false });
  
  // Contadores animados - não precisam ser reversíveis para evitar recontagem
  const { elementRef: expRef, count: expCount } = useCounterAnimation({ end: 3, delay: 500 });
  const { elementRef: projRef, count: projCount } = useCounterAnimation({ end: 15, delay: 700 });
  const { elementRef: satRef, count: satCount } = useCounterAnimation({ end: 99, delay: 900 });
  
  // Efeitos parallax já funcionam em ambos os sentidos
  const { elementRef: parallaxRef1 } = useParallax({ speed: 0.3, direction: 'up' });
  const { elementRef: parallaxRef2 } = useParallax({ speed: 0.2, direction: 'down' });

  const typewriterWords = [
    "Engenheiro de Dados & MLOps",
    "Desenvolvedor Full Stack",
    "Especialista em IA",
    "Arquiteto de Soluções"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Particles Melhoradas */}
      <div className="absolute inset-0 opacity-30">
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Elementos decorativos com parallax */}
      <div 
        ref={parallaxRef1}
        className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-r from-tech-blue to-tech-green rounded-full animate-pulse blur-sm"
      ></div>
      <div 
        ref={parallaxRef2}
        className="absolute top-1/3 right-20 w-2 h-2 bg-tech-purple rounded-full animate-pulse delay-300 blur-sm"
      ></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-tech-green rounded-full animate-pulse delay-700 blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`max-w-4xl mx-auto space-y-12 scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          {/* Título Principal com Animação de Texto */}
          <div 
            ref={titleRef}
            className={`text-center space-y-6 scroll-animate-scale ${titleVisible ? 'animate-in' : ''}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
                Juliano Matheus
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground min-h-[2rem]">
              <TypewriterEffect 
                words={typewriterWords}
                speed={80}
                deleteSpeed={40}
                delay={2500}
                className="text-tech-blue"
              />
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transformando dados em insights valiosos através de soluções inovadoras em Machine Learning e automação.
            </p>
          </div>

          {/* Botões de Ação com Efeitos Melhorados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group hover-lift bg-gradient-to-r from-tech-blue to-tech-green text-background font-semibold px-8 py-3"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group hover-lift border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background px-8 py-3"
            >
              Baixar CV
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Links Sociais com Efeitos Melhorados */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/juliano1805" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover-lift p-3 rounded-full bg-card border border-border hover:border-tech-blue"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors duration-300" />
            </a>
            
            <a 
              href="https://linkedin.com/in/juliano-matheus-a37745297/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover-lift p-3 rounded-full bg-card border border-border hover:border-tech-blue"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors duration-300" />
            </a>
            
            <a 
              href="mailto:julianomatheusferreira@gmail.com"
              className="group hover-lift p-3 rounded-full bg-card border border-border hover:border-tech-blue"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors duration-300" />
            </a>
          </div>

          {/* Estatísticas com Contadores Animados */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 scroll-animate ${statsVisible ? 'animate-in' : ''}`}
          >
            <div 
              ref={expRef}
              className="flex items-center justify-center gap-4 group hover-lift counter-animation"
            >
              <Briefcase className="h-10 w-10 text-tech-blue" />
              <div className="text-left">
                <div className="text-3xl font-bold text-tech-blue mb-1">
                  {expCount}+
                </div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
            
            <div 
              ref={projRef}
              className="flex items-center justify-center gap-4 group hover-lift counter-animation"
            >
              <PackageCheck className="h-10 w-10 text-tech-green" />
              <div className="text-left">
                <div className="text-3xl font-bold text-tech-green mb-1">
                  {projCount}+
                </div>
                <div className="text-muted-foreground">Projetos Concluídos</div>
              </div>
            </div>
            
            <div 
              ref={satRef}
              className="flex items-center justify-center gap-4 group hover-lift counter-animation"
            >
              <Smile className="h-10 w-10 text-tech-purple" />
              <div className="text-left">
                <div className="text-3xl font-bold text-tech-purple mb-1">
                  {satCount}%
                </div>
                <div className="text-muted-foreground">Satisfação do Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos animados adicionais */}
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-tech-blue rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-10 w-1.5 h-1.5 bg-tech-green rounded-full animate-pulse delay-1500"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-tech-purple rounded-full animate-pulse delay-2000"></div>
    </section>
  );
};

export default HeroSection;
