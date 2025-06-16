import { BarChart3, Cloud, Database, GitBranch, Monitor, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Design e implementação de pipelines de dados escaláveis usando Apache Spark, Kafka e Airflow.',
      technologies: ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Delta Lake']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Arquiteturas cloud-native em AWS, GCP e Azure com foco em escalabilidade e custos.',
      technologies: ['AWS', 'GCP', 'Azure', 'Terraform', 'CloudFormation']
    },
    {
      icon: GitBranch,
      title: 'MLOps & DevOps',
      description: 'CI/CD para modelos ML, versionamento e deploy automatizado com monitoramento contínuo.',
      technologies: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Implementação de soluções de monitoramento para pipelines e modelos em produção.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog', 'New Relic']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Desenvolvimento de dashboards e métricas de negócio para tomada de decisão.',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Metabase', 'Apache Superset']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Processamento de dados em tempo real com streaming e arquiteturas event-driven.',
      technologies: ['Apache Kafka', 'Apache Storm', 'Apache Flink', 'Redis', 'RabbitMQ']
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              Expertise Técnica
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por engenharia de dados e MLOps, com foco em construir soluções robustas e automatizadas. 
            Experiência em projetos que integram múltiplas tecnologias, desde pipelines de dados até aplicações de IA, 
            sempre priorizando boas práticas de desenvolvimento e qualidade de código.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group bg-card border border-border rounded-lg p-6 hover:border-tech-blue/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center group-hover:from-tech-blue/30 group-hover:to-tech-green/30 transition-all duration-300">
                    <skill.icon className="text-tech-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{skill.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-tech-gray-800 text-tech-blue text-xs rounded border border-tech-gray-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-tech-blue mb-2">10+</div>
            <div className="text-muted-foreground">Projetos de Dados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-tech-blue mb-2">3+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-tech-blue mb-2">5+</div>
            <div className="text-muted-foreground">Modelos em Produção</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-tech-blue mb-2">98%</div>
            <div className="text-muted-foreground">Uptime Médio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
