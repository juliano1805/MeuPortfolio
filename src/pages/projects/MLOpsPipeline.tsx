import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MLOpsPipeline = () => {
  const architectureSteps = [
    {
      title: "Ingestão e Versão de Dados",
      description: "Utilização do DVC para versionamento de dados e datasets, garantindo reprodutibilidade e rastreabilidade.",
      tools: ["DVC", "Python", "Pandas"]
    },
    {
      title: "Treinamento e Experimentação",
      description: "MLflow Tracking para monitoramento de experimentos, métricas e parâmetros durante o treinamento dos modelos.",
      tools: ["MLflow", "Scikit-learn", "PyTorch"]
    },
    {
      title: "Registro de Modelos",
      description: "MLflow Model Registry para versionamento e gerenciamento do ciclo de vida dos modelos.",
      tools: ["MLflow Registry", "Docker"]
    },
    {
      title: "CI/CD para Modelos",
      description: "Pipeline automatizada com GitHub Actions para testes, validação e empacotamento dos modelos.",
      tools: ["GitHub Actions", "Pytest", "Docker"]
    },
    {
      title: "Deploy",
      description: "API REST com FastAPI para servir os modelos, containerizada com Docker e orquestrada com Kubernetes.",
      tools: ["FastAPI", "Docker", "Kubernetes"]
    },
    {
      title: "Monitoramento",
      description: "Prometheus para coleta de métricas e Grafana para visualização e alertas em tempo real.",
      tools: ["Prometheus", "Grafana", "Python"]
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
              Pipeline MLOps
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Uma pipeline completa de MLOps que automatiza todo o ciclo de vida dos modelos de machine learning,
            desde a ingestão de dados até o monitoramento em produção.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Arquitetura</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureSteps.map((step) => (
                  <Card key={step.title} className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded font-mono"
                        >
                          {tool}
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
                  <h3 className="text-xl font-semibold mb-2">Tempo de Deploy</h3>
                  <p className="text-3xl font-bold text-tech-green">-80%</p>
                  <p className="text-muted-foreground">Redução no tempo de deploy de novos modelos</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Reprodutibilidade</h3>
                  <p className="text-3xl font-bold text-tech-green">100%</p>
                  <p className="text-muted-foreground">Garantia de reprodutibilidade dos experimentos</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Monitoramento</h3>
                  <p className="text-3xl font-bold text-tech-green">24/7</p>
                  <p className="text-muted-foreground">Monitoramento contínuo de métricas e drift</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Próximos Passos</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Implementação de A/B testing automatizado</li>
                <li>Integração com mais ferramentas de monitoramento</li>
                <li>Expansão do suporte a diferentes tipos de modelos</li>
                <li>Automação de retreinamento baseado em drift</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Problemas que enfrentei</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>**Garantia de Qualidade de Dados e Detecção de Fraudes em Tempo Real:** O principal desafio foi assegurar a integridade e a consistência dos dados de transações em um ambiente de alta velocidade, crucial para a detecção de fraudes. A solução envolveu a implementação de pipelines de validação de dados contínuos com Great Expectations e a criação de alertas automatizados para anomalias, garantindo que apenas dados de alta qualidade fossem usados para inferência em tempo real.</li>
                <li>**Gerenciamento de Model Drift e Re-treinamento Automatizado:** Enfrentei a complexidade de monitorar o desempenho do modelo em produção e identificar o "model drift" (degradação do desempenho do modelo ao longo do tempo). Desenvolvi um sistema automatizado com MLflow e Airflow que detecta desvios significativos nas métricas do modelo e dispara processos de re-treinamento e re-deploy, minimizando a intervenção manual e mantendo a acurácia do sistema.</li>
                <li>**Implementação de CI/CD Robusto para Modelos de ML:** A integração contínua e a entrega contínua (CI/CD) para modelos de Machine Learning apresentaram desafios únicos devido à complexidade de versionamento de código, dados e modelos. Adotei GitHub Actions para automatizar testes unitários, testes de integração e testes de desempenho dos modelos, e criei fluxos de trabalho para empacotamento em Docker e deploy orquestrado em Kubernetes, assegurando a rastreabilidade e a automação de todo o ciclo de vida do modelo.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLOpsPipeline; 