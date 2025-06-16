import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const features = [
    {
      title: "Design Moderno",
      description: "Interface moderna e responsiva construída com Tailwind CSS e Shadcn/ui, oferecendo uma experiência de usuário excepcional.",
      technologies: ["Tailwind CSS", "Shadcn/ui", "CSS Modules"]
    },
    {
      title: "Performance Otimizada",
      description: "Construído com Vite e otimizado para performance, garantindo carregamento rápido e experiência fluida.",
      technologies: ["Vite", "React", "TypeScript"]
    },
    {
      title: "SEO Avançado",
      description: "Implementação de meta tags, sitemap e otimização para mecanismos de busca, melhorando a visibilidade online.",
      technologies: ["React Helmet", "Sitemap", "Meta Tags"]
    },
    {
      title: "Deploy Automatizado",
      description: "Pipeline de CI/CD com GitHub Actions para deploy automático no GitHub Pages, garantindo atualizações contínuas.",
      technologies: ["GitHub Actions", "GitHub Pages", "CI/CD"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Portfólio Profissional
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Um portfólio moderno e responsivo desenvolvido para demonstrar projetos e experiências em Engenharia de Dados e MLOps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
            <p className="text-muted-foreground mb-4">
              Este portfólio foi desenvolvido com foco em demonstrar minhas habilidades técnicas e projetos em Engenharia de Dados e MLOps. 
              A implementação prioriza performance, SEO e uma experiência de usuário excepcional.
            </p>
            <p className="text-muted-foreground">
              O projeto utiliza tecnologias modernas de desenvolvimento web e implementa boas práticas de 
              desenvolvimento, incluindo tipagem forte com TypeScript, estilização com Tailwind CSS e 
              deploy automatizado com GitHub Actions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages", "GitHub Actions"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-tech-blue/20 text-tech-blue text-sm rounded-lg font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Funcionalidades Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Links</h2>
            <div className="space-y-4">
              <a 
                href="https://github.com/juliano1805/MeuPortfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Ver no GitHub
                </Button>
              </a>
              <a 
                href="https://juliano1805.github.io/MeuPortfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Acessar o Site
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 