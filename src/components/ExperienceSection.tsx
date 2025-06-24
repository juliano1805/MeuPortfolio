import { ArrowRight, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/use-scroll-animation';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 - Presente",
      title: "Estagiário em Cibersegurança",
      institution: "Diretoria de Sistemas e Informação Gerencial (DSIG) - UFPE",
      tar: {
        task: "Fortalecer a segurança da informação e conformidade com LGPD na UFPE",
        action: "Implementação de políticas de segurança, análise de vulnerabilidades e gestão de identidades",
        result: "Redução de 40% nos incidentes de segurança e melhoria na conformidade com LGPD"
      },
      technologies: ["Segurança da Informação", "LGPD", "Análise de Vulnerabilidades", "Gestão de Identidades"],
      keyAchievement: "Implementação de framework de conformidade com LGPD para 5 departamentos",
      achievements: [
        "Implementação de políticas de segurança da informação que reduziram incidentes em 40%",
        "Análise e mitigação de 15 vulnerabilidades críticas em sistemas institucionais",
        "Desenvolvimento de framework de conformidade com LGPD para 5 departamentos"
      ],
      relatedLinks: [
        {
          text: "Caso de Estudo: Segurança da Informação na UFPE",
          url: "#case-studies",
          icon: BookOpen
        }
      ]
    },
    {
      id: 2,
      period: "2023 - 2024",
      title: "Analista de Dados",
      institution: "Secretaria de Educação (SEE)",
      tar: {
        task: "Otimizar a gestão e análise de dados educacionais para tomada de decisão estratégica",
        action: "Desenvolvimento de dashboards interativos e automação de relatórios",
        result: "Aumento de 60% na eficiência da análise e redução de 70% no tempo de geração de relatórios"
      },
      technologies: ["Power BI", "Excel", "SQL", "Python"],
      keyAchievement: "Criação de 8 dashboards que otimizaram o monitoramento de indicadores educacionais",
      achievements: [
        "Desenvolvimento de 8 dashboards que otimizaram o monitoramento de indicadores educacionais",
        "Automação de relatórios que reduziram o tempo de análise em 70%",
        "Implementação de sistema de alertas que identificou 25 anomalias em dados educacionais"
      ],
      relatedLinks: [
        {
          text: "Caso de Estudo: Análise de Dados Educacionais",
          url: "#case-studies",
          icon: BookOpen
        }
      ]
    },
    {
      id: 3,
      period: "2022 - Presente",
      title: "Graduando em Gestão da Informação",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      tar: {
        task: "Desenvolver competências em ciência de dados e tecnologia da informação",
        action: "Participação em projetos práticos e desenvolvimento de soluções tecnológicas inovadoras",
        result: "Formação técnica robusta e criação de projetos como o TETEU IA"
      },
      technologies: ["Python", "SQL", "Power BI", "Excel", "Gestão de Dados"],
      keyAchievement: "Desenvolvimento do TETEU IA, assistente inteligente para análise de dados",
      achievements: [
        "Desenvolvimento do TETEU IA, assistente inteligente para análise de dados",
        "Participação em 3 projetos de extensão universitária",
        "Implementação de 5 projetos práticos em análise de dados"
      ],
      relatedLinks: [
        {
          text: "Projeto TETEU IA",
          url: "/projects/teteu-ia",
          icon: BookOpen
        }
      ]
    }
  ];

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: false });
  const { containerRef, visibleItems } = useStaggerAnimation(experiences, { triggerOnce: false });

  return (
    <section id="experience" className="py-16 sm:py-20 px-5 pt-8 pb-8">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">Minha Jornada</span>
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground text-center mb-6">
        Experiências profissionais e acadêmicas que demonstram crescimento contínuo e resultados mensuráveis.
      </p>

      <div ref={containerRef} className="relative space-y-8 py-4">
        <div className="absolute left-5 md:left-10 top-0 h-full w-[2px] bg-tech-gray-700"></div>

        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            data-index={index}
            className={`relative pl-10 md:pl-20 group card-stagger ${visibleItems.has(index) ? 'animate-in' : ''}`}
          >
            <div className="absolute w-4 h-4 bg-tech-blue rounded-full left-5 md:left-10 top-0 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold text-tech-blue mb-1">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.institution}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-sm font-semibold text-tech-green bg-tech-green/10 px-3 py-1 rounded-full">
                    {exp.keyAchievement}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-tech-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-foreground">{exp.tar.task}</p>
                </div>
                <div className="bg-tech-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-foreground">{exp.tar.action}</p>
                </div>
                <div className="bg-tech-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-foreground">{exp.tar.result}</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-3">Tecnologias</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-tech-gray-800 text-tech-blue text-sm rounded border border-tech-gray-700 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-3">Conquistas</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>

              {exp.relatedLinks && exp.relatedLinks.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold mb-3">Links Relacionados</h4>
                  <div className="space-y-2">
                    {exp.relatedLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.url.startsWith('/') ? "_self" : "_blank"}
                        rel={link.url.startsWith('/') ? "" : "noopener noreferrer"}
                        className="inline-flex items-center text-tech-blue hover:text-tech-green transition-colors"
                      >
                        <LinkIcon className="mr-2 h-4 w-4" />
                        {link.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 