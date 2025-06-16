import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TETEUIA = () => {
  const features = [
    {
      title: "RAG (Retrieval-Augmented Generation)",
      description: "Sistema que combina recuperação de informações com geração de texto para respostas mais precisas e contextualizadas.",
      technologies: ["ChromaDB", "LangChain", "GPT-4"]
    },
    {
      title: "Interface Intuitiva",
      description: "Interface web moderna e responsiva que permite interação natural com o assistente.",
      technologies: ["React", "TailwindCSS", "TypeScript"]
    },
    {
      title: "API Robusta",
      description: "Backend escalável construído com FastAPI, oferecendo endpoints RESTful e documentação automática.",
      technologies: ["FastAPI", "Python", "Docker"]
    },
    {
      title: "Base de Conhecimento",
      description: "Sistema de armazenamento vetorial otimizado para busca semântica e recuperação de informações.",
      technologies: ["ChromaDB", "Sentence Transformers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              TETEU IA
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Um assistente inteligente baseado em LLMs que utiliza RAG (Retrieval-Augmented Generation)
            para fornecer respostas precisas e contextualizadas, combinando o poder dos modelos de linguagem
            com uma base de conhecimento personalizada.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tecnologias Principais</h2>
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
              <h2 className="text-2xl font-bold mb-4">Resultados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Precisão</h3>
                  <p className="text-3xl font-bold text-tech-green">95%</p>
                  <p className="text-muted-foreground">Taxa de precisão nas respostas</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tempo de Resposta</h3>
                  <p className="text-3xl font-bold text-tech-green">1.2s</p>
                  <p className="text-muted-foreground">Média de tempo para gerar respostas</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Base de Conhecimento</h3>
                  <p className="text-3xl font-bold text-tech-green">10k+</p>
                  <p className="text-muted-foreground">Documentos indexados</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Próximos Passos</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Implementação de memória de longo prazo para conversas</li>
                <li>Suporte a múltiplos formatos de documentos</li>
                <li>Integração com mais modelos de linguagem</li>
                <li>Expansão da base de conhecimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Problemas que enfrentei</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>**Gerenciamento de contexto e histórico de conversas em LLMs:** O desafio foi manter a coerência e relevância das respostas ao longo de interações longas, exigindo estratégias eficientes de compressão e recuperação de contexto sem estourar os limites de tokens. A solução envolveu a implementação de técnicas de sumarização e a utilização de bancos de dados vetoriais para armazenamento e busca semântica de históricos, garantindo a continuidade do diálogo e a pertinência das respostas.</li>
                <li>**Otimização de custos e latência na integração de múltiplas APIs de IA:** Enfrentei dificuldades em equilibrar o desempenho e o custo operacional ao consumir diversas APIs externas com diferentes modelos e precificações. Resolvi isso implementando um sistema de cache inteligente para respostas frequentes e um roteador de chamadas de API que seleciona o modelo mais adequado com base na complexidade da consulta e no custo-benefício.</li>
                <li>**Garantia de segurança e privacidade dos dados do usuário:** A proteção do histórico de interações e dados sensíveis foi uma preocupação constante. Implementei criptografia de ponta a ponta para o armazenamento local do banco de dados, além de mecanismos de anonimização para logs e auditoria de acesso. Desenvolvi também um módulo de sanitização de entrada para prevenir injeções de prompt e outras vulnerabilidades.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TETEUIA; 