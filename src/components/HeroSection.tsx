import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-8">
            <p className="text-tech-blue font-mono text-sm tracking-wider uppercase mb-8">
              Engenheiro de Dados | Desenvolvedor de Soluções de IA
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-tech-blue to-tech-green bg-clip-text text-transparent mb-8">
              Transformando
              <br />
              <span className="block mt-4">Dados em Valor</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Como Engenheiro de Dados, sou apaixonado por aplicar meus conhecimentos para construir soluções robustas e inovadoras. 
              Embora esteja no início da minha carreira, busco desafios que estão na fronteira da tecnologia, 
              o que me levou a desenvolver projetos complexos de ponta a ponta, como uma pipeline de MLOps totalmente automatizada 
              e o TETEU IA, uma aplicação de IA funcional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a href="#projects">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/80">
                Ver Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="pt-12">
            <p className="text-muted-foreground mb-6 font-mono text-sm">TECNOLOGIAS PRINCIPAIS</p>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              {[
                'Python', 'Apache Spark', 'Docker', 'Kubernetes', 'AWS', 'GCP',
                'MLflow', 'Prometheus', 'Grafana', 'Terraform', 'Apache Airflow', 'dbt'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-tech-gray-800 border border-tech-gray-700 rounded-md text-sm font-mono hover:border-tech-blue transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-tech-green rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default HeroSection;
