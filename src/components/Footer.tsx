import { ArrowUp, Github, Linkedin, Mail, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          {/* Links Sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/juliano1805" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover-lift p-3 rounded-full bg-tech-gray-800 border border-tech-gray-700 hover:border-tech-blue transition-all duration-300"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com/in/juliano-matheus-a37745297/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover-lift p-3 rounded-full bg-tech-gray-800 border border-tech-gray-700 hover:border-tech-blue transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors" />
            </a>
            
            <a 
              href="mailto:julianomatheusferreira@gmail.com"
              className="group hover-lift p-3 rounded-full bg-tech-gray-800 border border-tech-gray-700 hover:border-tech-blue transition-all duration-300"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-colors" />
            </a>
          </div>

          {/* Informações */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              Juliano Matheus
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Engenheiro de Dados apaixonado por transformar dados em insights valiosos através de soluções inovadoras em Machine Learning e automação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'Sobre' },
              { href: '#projects', label: 'Projetos' },
              { href: '#case-studies', label: 'Estudos de Caso' },
              { href: '#articles', label: 'Artigos' },
              { href: '#experience', label: 'Experiência' },
              { href: '#contact', label: 'Contato' }
            ].map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-tech-blue transition-colors duration-200 hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2025 Juliano Matheus. Feito com{' '}
              <Coffee className="inline h-4 w-4 text-amber-500" />
              {' '}e muito código.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Construído com React, TypeScript, Tailwind CSS e Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
