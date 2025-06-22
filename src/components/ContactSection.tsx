import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "julianomatheusferreira@gmail.com",
      href: "mailto:julianomatheusferreira@gmail.com",
      description: "Envie um email direto"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@juliano1805",
      href: "https://github.com/juliano1805",
      description: "Veja meus projetos"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Juliano Matheus",
      href: "https://linkedin.com/in/juliano-matheus-a37745297/",
      description: "Conecte-se profissionalmente"
    }
  ];

  const { containerRef, visibleItems } = useStaggerAnimation(contactMethods, { triggerOnce: false });

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Vamos Conversar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Interessado em colaborar em projetos de dados ou MLOps? Vamos discutir como posso ajudar a transformar seus dados em valor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <Input
                  id="subject"
                  placeholder="Sobre o que você gostaria de conversar?"
                  className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  rows={6}
                  className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors resize-none"
                />
              </div>
              
              <Button 
                className="w-full group hover-lift bg-gradient-to-r from-tech-blue to-tech-green text-background font-semibold"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </Button>
            </div>
          </div>

          {/* Métodos de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Outras formas de contato
            </h3>
            
            <div 
              ref={containerRef}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    data-index={index}
                    className={`group block p-6 bg-card border border-border rounded-lg hover:border-tech-blue/50 transition-all duration-300 card-stagger hover-lift ${
                      visibleItems.has(index) ? 'animate-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-tech-blue/20 rounded-lg group-hover:bg-tech-blue/30 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-tech-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-tech-blue transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-tech-blue font-mono">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 p-6 bg-tech-gray-800/50 border border-tech-gray-700 rounded-lg animate-float">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Disponibilidade
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>• Projetos freelance e consultoria</p>
                <p>• Colaborações em projetos open source</p>
                <p>• Mentoria em Engenharia de Dados</p>
                <p>• Palestras e workshops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
