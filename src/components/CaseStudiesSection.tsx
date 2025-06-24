import { BarChart3, Cloud, Database, GitBranch, Monitor, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Componente filho para animação fade-in garantida
function CaseStudyCard({ study, index, mobile, visible, animationClass, delay, visibleItemsCount }) {
  const cardRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (mobile) {
      setTimeout(() => setFadeIn(true), 50 + index * 80);
    }
  }, [mobile]);
  const shouldBeVisible = mobile || visibleItemsCount === 0 || visible;
  const cardClass = mobile
    ? `bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift opacity-0 ${fadeIn ? 'animate-fade-in opacity-100' : ''}`
    : `bg-card border border-border rounded-lg p-6 shadow-lg card-stagger hover-lift ${shouldBeVisible ? animationClass : 'opacity-0'}`;
  return (
    <div
      key={study.id}
      data-index={index}
      ref={cardRef}
      className={cardClass}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-bold text-tech-blue mb-2 group-hover:text-tech-green transition-colors">
        {study.title}
      </h3>
      <p className="text-muted-foreground mb-4">{study.description}</p>
      <h4 className="text-lg font-semibold mb-2">Desafio</h4>
      <p className="text-foreground mb-4">{study.challenge}</p>
      <h4 className="text-lg font-semibold mb-2">Solução</h4>
      <p className="text-foreground mb-4">{study.solution}</p>
      <h4 className="text-lg font-semibold mb-2">Resultados</h4>
      <ul className="list-disc list-inside space-y-1 text-foreground mb-4">
        {study.results.map((result, idx) => (
          <li key={idx}>{result}</li>
        ))}
      </ul>
      <h4 className="text-lg font-semibold mb-2">Tecnologias</h4>
      <div className="flex flex-wrap gap-2">
        {study.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-tech-gray-800 text-tech-blue text-sm rounded border border-tech-gray-700 font-mono hover:bg-tech-blue/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const CaseStudiesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: false });
  
  const caseStudies = [
    {
      id: 1,
      title: "TETEU IA - Assistente de Código Multiplataforma",
      description: "Desenvolvimento de um assistente de programação em Python que integra múltiplas IAs para análise e sugestões de código.",
      challenge: "Criar uma ferramenta que ajudasse desenvolvedores a melhorar seu código e aprendizado, integrando diferentes modelos de IA e mantendo um histórico de interações.",
      solution: "Desenvolvimento de uma aplicação em Python que integra APIs de OpenAI, Cohere e Hugging Face, com sistema de banco de dados local e funcionalidades de análise automática de código.",
      results: [
        "Sistema de respostas inteligentes com múltiplos modelos de IA",
        "Análise automática de código com sugestões de melhorias",
        "Histórico local de interações com exportação para Jupyter",
        "Sistema de ranking para quizzes e avaliações",
        "Interface via terminal com suporte a múltiplas plataformas"
      ],
      technologies: ["Python", "OpenAI", "Cohere", "Hugging Face", "SQLite"]
    },
    {
      id: 2,
      title: "Pipeline MLOps - THEMIS",
      description: "Desenvolvimento de um pipeline completo de Machine Learning para detecção de fraudes, com foco em produção e boas práticas.",
      challenge: "Criar um projeto robusto que simulasse um ambiente de MLOps real, demonstrando automação, rastreabilidade e deploy de modelos.",
      solution: "Implementação de MLflow para rastreamento, Flask para API, GitHub Actions para CI/CD e Prometheus para monitoramento.",
      results: [
        "Integração com MLflow para versionamento e gerenciamento de experimentos",
        "API Flask para servir predições do modelo com métricas",
        "Pipeline CI/CD automatizado com GitHub Actions",
        "Testes automatizados com Pytest e logging estruturado"
      ],
      technologies: ["MLflow", "Flask", "Prometheus", "GitHub Actions", "Docker"]
    },
    {
      id: 3,
      title: "Análise de Dados Educacionais - Otimização de Decisões Estratégicas",
      description: "Desenvolvimento de dashboards e relatórios estratégicos para aprimorar a gestão e análise de dados educacionais, impactando diretamente a tomada de decisões.",
      challenge: "Melhorar a gestão e análise de dados educacionais para uma tomada de decisão mais eficiente e baseada em evidências.",
      solution: "Criação de visualizações interativas, implementação de processos de análise e desenvolvimento de relatórios automatizados.",
      results: [
        "Aumento de 60% na eficiência da análise de dados",
        "Melhoria na qualidade das decisões estratégicas",
        "Desenvolvimento de 8 dashboards que otimizaram o monitoramento de indicadores educacionais",
        "Automação de relatórios que reduziram o tempo de análise em 70%",
        "Implementação de sistema de alertas que identificou 25 anomalias em dados educacionais"
      ],
      technologies: ["Power BI", "Excel", "SQL", "Python"]
    },
    {
      id: 4,
      title: "Segurança da Informação na UFPE - Fortalecimento da Infraestrutura Digital",
      description: "Implementação de medidas avançadas de segurança da informação para proteger dados sensíveis e garantir a conformidade em ambiente universitário, com foco na infraestrutura digital da UFPE.",
      challenge: "Proteger a crescente quantidade de dados acadêmicos e administrativos contra ameaças cibernéticas, garantindo a conformidade com regulamentações e a integridade da infraestrutura de TI.",
      solution: "Desenvolvimento e implementação de políticas de segurança, sistemas de monitoramento de rede, treinamentos de conscientização e soluções de criptografia para fortalecer a postura de segurança da universidade.",
      results: [
        "Redução de 40% nos incidentes de segurança reportados",
        "Aumento de 25% na conformidade com políticas de proteção de dados (LGPD)",
        "Melhoria na resiliência da infraestrutura de rede e sistemas",
        "Conscientização de 90% dos usuários sobre boas práticas de segurança"
      ],
      technologies: ["Segurança da Informação", "LGPD", "Análise de Vulnerabilidades", "Gestão de Identidades"]
    }
  ];

  const { containerRef, visibleItems } = useStaggerAnimation(caseStudies, { triggerOnce: false });

  const mobile = useIsMobile();

  return (
    <section id="case-studies" className="py-16 sm:py-20 px-5 pt-8 pb-8">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Estudos de Caso
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-6 max-w-3xl mx-auto">
            Análises detalhadas de projetos que demonstram metodologia, processo de desenvolvimento e resultados quantificáveis.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-visible"
        >
          {caseStudies.map((study, index) => {
            const animationClass = mobile ? 'animate-fade-in duration-300' : 'animate-in';
            const delay = mobile ? Math.min(index * 100, 100) : index * 200;
            return (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                mobile={mobile}
                visible={visibleItems.has(index)}
                animationClass={animationClass}
                delay={delay}
                visibleItemsCount={visibleItems.size}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 