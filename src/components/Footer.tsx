import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-green rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-sm">JM</span>
            </div>
            <span className="font-semibold text-lg">Juliano Matheus</span>
          </div>

          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <nav className="flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
                Sobre
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
                Projetos
              </a>
              <a href="#articles" className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
                Artigos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
                Contato
              </a>
            </nav>
          </div>

          <Button 
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background group"
          >
            <ArrowUp className="mr-2 group-hover:-translate-y-1 transition-transform" size={16} />
            Topo
          </Button>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-4 md:mb-0">
            © 2024 DataEngineer Portfolio. Construído com React, Tailwind CSS e muita dedicação.
          </p>
          <div className="flex space-x-6">
            <span className="font-mono">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-border">
          <a href="https://github.com/juliano1805" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/juliano-matheus-a37745297/" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@dataengineer.com"
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
