import articlesData from '@/data/articles.json';

export interface Article {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  tags: string[];
  url: string;
}

export function getArticles(): Article[] {
  return articlesData.articles;
}

export function getLatestArticles(limit: number = 3): Article[] {
  return articlesData.articles
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}

export function getArticleById(id: string): Article | undefined {
  return articlesData.articles.find(article => article.id === id);
}

export function getArticlesByTag(tag: string): Article[] {
  return articlesData.articles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
} 