interface SuperArticle {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  tags: string[];
  url: string;
}

export async function getArticles(): Promise<SuperArticle[]> {
  try {
    // URL do seu site no Super.so
    const response = await fetch('https://seu-site.super.site/api/articles');
    const data = await response.json();

    return data.map((article: any) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      coverImage: article.cover_image,
      publishedDate: article.published_date,
      tags: article.tags || [],
      url: article.url
    }));
  } catch (error) {
    console.error('Erro ao buscar artigos do Super.so:', error);
    return [];
  }
} 