import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

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

  // Função para scroll suave com offset do header
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Aguarda o menu fechar antes de rolar
    setTimeout(() => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.clientHeight : 0;
        const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // 8px de margem extra
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 200); // tempo suficiente para o menu sumir
  };

  // Travar scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#case-studies', label: 'Estudos de Caso' },
    { href: '#articles', label: 'Artigos' },
    { href: '#experience', label: 'Experiência' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-5 h-16 flex items-center justify-between pt-2">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-green rounded-md flex items-center justify-center">
            <span className="text-background font-bold text-sm">JM</span>
          </div>
          <span className="font-semibold text-xs max-w-[60px] overflow-hidden truncate sm:text-sm sm:max-w-[120px] md:text-base md:max-w-none">
            <span className="block sm:hidden">Juliano</span>
            <span className="hidden sm:block">Juliano Matheus</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
          <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Estudos de Caso</a>
          <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">Artigos Recentes</a>
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
          <a href="mailto:julianomatheusferreira@gmail.com"
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
      {/* Menu lateral mobile fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen z-[1000] bg-neutral-900/95 backdrop-blur-md flex flex-col items-center justify-center overflow-y-auto transition-opacity duration-300">
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[1001]" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          <nav className="flex flex-col gap-8 text-2xl font-bold w-full max-w-xs items-center z-[1001]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-tech-blue transition-colors text-white text-center"
                onClick={(e) => handleMenuClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
