import { ArrowRight, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 - Presente",
      title: "Estagiário em Cibersegurança",
      institution: "Diretoria de Sistemas e Informação Gerencial (DSIG) - UFPE",
      description: {
        situation: "A UFPE necessitava fortalecer sua segurança da informação e conformidade com LGPD.",
        task: "Contribuir para a proteção de dados institucionais e implementação de boas práticas de segurança.",
        action: "Desenvolvimento e implementação de políticas de segurança, análise de vulnerabilidades e gestão de identidades.",
        result: "Melhoria significativa na postura de segurança da instituição e maior conformidade com requisitos legais."
      },
      technologies: ["Segurança da Informação", "LGPD", "Análise de Vulnerabilidades", "Gestão de Identidades"],
      achievements: [
        "Implementação de políticas de segurança da informação que reduziram incidentes em 40%",
        "Análise e mitigação de 15 vulnerabilidades críticas em sistemas institucionais",
        "Desenvolvimento de framework de conformidade com LGPD para 5 departamentos"
      ],
      relatedLinks: [
        {
          text: "Caso de Estudo: Segurança da Informação na UFPE",
          url: "#", // Placeholder, you can update this later
          icon: BookOpen
        }
      ]
    },
    {
      id: 2,
      period: "2023 - 2024",
      title: "Analista de Dados",
      institution: "Secretaria de Educação (SEE)",
      description: {
        situation: "Necessidade de melhorar a gestão e análise de dados educacionais para tomada de decisão.",
        task: "Desenvolver dashboards e relatórios estratégicos para monitoramento de indicadores educacionais.",
        action: "Criação de visualizações interativas, implementação de processos de análise e desenvolvimento de relatórios automatizados.",
        result: "Aumento de 60% na eficiência da análise de dados e melhoria na qualidade das decisões estratégicas."
      },
      technologies: ["Power BI", "Excel", "SQL", "Python"],
      achievements: [
        "Desenvolvimento de 8 dashboards que otimizaram o monitoramento de indicadores educacionais",
        "Automação de relatórios que reduziram o tempo de análise em 70%",
        "Implementação de sistema de alertas que identificou 25 anomalias em dados educacionais"
      ],
      relatedLinks: [
        {
          text: "Caso de Estudo: Análise de Dados Educacionais",
          url: "#", // Placeholder, you can update this later
          icon: BookOpen
        }
      ]
    },
    {
      id: 3,
      period: "2022 - Presente",
      title: "Graduando em Gestão da Informação",
      institution: "Universidade Federal de Pernambuco (UFPE)",
      description: {
        situation: "Busca por formação sólida em gestão e tecnologia da informação.",
        task: "Desenvolver competências em ciência de dados, tecnologia da informação e gestão estratégica.",
        action: "Participação em projetos práticos, extensão universitária e desenvolvimento de soluções tecnológicas.",
        result: "Formação técnica robusta e desenvolvimento de projetos inovadores como o TETEU IA."
      },
      technologies: ["Python", "SQL", "Power BI", "Excel", "Gestão de Dados"],
      achievements: [
        "Desenvolvimento do TETEU IA, assistente inteligente para análise de dados",
        "Participação em 3 projetos de extensão universitária",
        "Implementação de 5 projetos práticos em análise de dados"
      ],
      relatedLinks: [
        {
          text: "Projeto TETEU IA",
          url: "/projects/teteu-ia", // Link to your existing project page
          icon: BookOpen
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Minha Jornada
            </span>
          </h2>
        </div>

        <div className="relative space-y-12 py-4">
          <div className="absolute left-5 md:left-10 top-0 h-full w-[2px] bg-tech-gray-700"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-10 md:pl-20 group">
              <div className="absolute w-4 h-4 bg-tech-blue rounded-full left-5 md:left-10 top-0 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-lg animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="text-sm font-mono text-muted-foreground mb-2">{exp.period}</p>
                <h3 className="text-2xl font-bold text-tech-blue mb-1">{exp.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">{exp.institution}</p>

                <div className="space-y-3 mb-6">
                  <p className="text-foreground">
                    <span className="font-semibold text-tech-green">Situação:</span> {exp.description.situation}
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold text-tech-green">Tarefa:</span> {exp.description.task}
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold text-tech-green">Ação:</span> {exp.description.action}
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold text-tech-green">Resultado:</span> {exp.description.result}
                  </p>
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
                          target={link.url.startsWith('/') ? "_self" : "_blank"} // Open internal links in same tab, external in new
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
      </div>
    </section>
  );
};

export default ExperienceSection; 