const fs = require('fs');
const path = require('path');

// Função para formatar a data
function formatDate(date) {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

// Função para atualizar os artigos
async function updateArticles() {
  try {
    // Aqui você pode adicionar a lógica para buscar os artigos do Super.so
    // Por enquanto, vamos usar um exemplo de como seria a estrutura
    const articles = [
      {
        id: "1",
        title: "T.E.T.E.U IA - Assistente de Código Multiplataforma",
        description: "Desenvolvimento de um assistente de programação em Python que integra múltiplas IAs para análise e sugestões de código.",
        coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6bd242a0-b690-42c3-80ae-f7c5d14751db/T.E.T.E.U/w=1920,quality=90,fit=scale-down",
        publishedDate: formatDate(new Date('2024-05-26')),
        tags: ["Python", "IA", "Desenvolvimento"],
        url: "https://julianomatheusblog.super.site/teteu-ia"
      },
      {
        id: "2",
        title: "Pipeline MLOps - THEMIS",
        description: "Desenvolvimento de um pipeline completo de Machine Learning para detecção de fraudes, com foco em produção e boas práticas.",
        coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a777746-05f8-4ce6-9cd8-21bdd71ccc59/THEMIS/w=1920,quality=90,fit=scale-down",
        publishedDate: formatDate(new Date('2024-05-12')),
        tags: ["MLOps", "Machine Learning", "DevOps"],
        url: "https://julianomatheusblog.super.site/pipeline-mlops-themis"
      }
      // Adicione mais artigos aqui conforme necessário
    ];

    // Salvar no arquivo JSON
    const articlesJson = {
      articles: articles
    };

    const filePath = path.join(__dirname, '../public/data/articles.json');
    fs.writeFileSync(filePath, JSON.stringify(articlesJson, null, 2));

    console.log('✅ Artigos atualizados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao atualizar os artigos:', error);
  }
}

// Executar a atualização
updateArticles(); 