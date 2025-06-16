import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Vamos Conversar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interessado em colaborar ou discutir projetos de dados? 
            Entre em contato para explorarmos oportunidades juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-tech-blue/50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:julianomatheusferreira@gmail.com" className="text-tech-blue hover:text-tech-green transition-colors">
                      julianomatheusferreira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-tech-blue/50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-muted-foreground">Recife, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-tech-blue hover:bg-tech-blue/10 transition-all duration-200 group"
                >
                  <Github className="text-muted-foreground group-hover:text-tech-blue transition-colors" size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/juliano-matheus-a37745297/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-tech-blue hover:bg-tech-blue/10 transition-all duration-200 group"
                >
                  <Linkedin className="text-muted-foreground group-hover:text-tech-blue transition-colors" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 bg-gradient-to-r from-tech-blue/10 to-tech-green/10 rounded-lg border border-tech-blue/20">
              <h4 className="font-semibold mb-4">Disponibilidade</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-green rounded-full"></div>
                  <span>Disponível para projetos freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                  <span>Consultoria em MLOps e Data Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                  <span>Mentorias técnicas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form className="space-y-6 p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome *</label>
                  <Input 
                    id="name"
                    placeholder="Seu nome completo"
                    className="bg-background border-tech-gray-600 focus:border-tech-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background border-tech-gray-600 focus:border-tech-blue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto *</label>
                <Input 
                  id="subject"
                  placeholder="Sobre o que você gostaria de conversar?"
                  className="bg-background border-tech-gray-600 focus:border-tech-blue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem *</label>
                <Textarea 
                  id="message"
                  rows={6}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="bg-background border-tech-gray-600 focus:border-tech-blue resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-tech-blue hover:bg-tech-blue/80 text-background font-semibold group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Enviar Mensagem
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Respondo normalmente em até 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
