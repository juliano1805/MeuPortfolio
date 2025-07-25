import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Estado de loading e feedback
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Função para atualizar o estado do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para validar o formulário
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Por favor, insira seu nome');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Por favor, insira seu email');
      return false;
    }
    if (!formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error('Por favor, insira um assunto');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Por favor, insira uma mensagem');
      return false;
    }
    if (formData.message.length < 10) {
      toast.error('A mensagem deve ter pelo menos 10 caracteres');
      return false;
    }
    return true;
  };

  // Função para enviar o email usando mailto:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Criar o link mailto: com os dados do formulário
      const mailtoLink = `mailto:julianomatheusferreira@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      )}`;
      
      // Abrir o cliente de email padrão
      window.location.href = mailtoLink;
      
      toast.success('Cliente de email aberto! Preencha e envie sua mensagem.');
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao abrir email:', error);
      toast.error('Erro ao abrir cliente de email. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Função para resetar o formulário
  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            {isSubmitted ? (
              <div className="text-center space-y-6 p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200">
                  Email Aberto!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Seu cliente de email foi aberto. Preencha e envie sua mensagem!
                </p>
                <Button 
                  onClick={handleReset}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30"
                >
                  Enviar Nova Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={6}
                    className="hover-lift border-tech-gray-700 focus:border-tech-blue transition-colors resize-none"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Mínimo 10 caracteres ({formData.message.length}/10)
                  </p>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full group hover-lift bg-gradient-to-r from-tech-blue to-tech-green text-background font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Abrindo Email...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
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
