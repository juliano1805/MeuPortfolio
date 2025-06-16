import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#case-studies', label: 'Casos de Estudo' },
    { href: '#articles', label: 'Artigos' },
    { href: '#experience', label: 'Experiência' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-green rounded-md flex items-center justify-center">
            <span className="text-background font-bold text-sm">JM</span>
          </div>
          <span className="font-semibold text-lg">Juliano Matheus</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
          <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Casos de Estudo</a>
          <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experiência</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/juliano1805" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/juliano-matheus-a37745297/" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@dataengineer.com"
             className="text-muted-foreground hover:text-tech-blue transition-colors duration-200">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <Sheet>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                <a href="#home" className="hover:text-primary transition-colors">Sobre</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
                <a href="#case-studies" className="hover:text-primary transition-colors">Casos de Estudo</a>
                <a href="#articles" className="hover:text-primary transition-colors">Blog</a>
                <a href="#experience" className="hover:text-primary transition-colors">Experiência</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </header>
  );
};

export default Header;
