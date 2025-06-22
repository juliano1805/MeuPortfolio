import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPER_SITE_URL = 'https://julianomatheusblog.super.site';

async function syncArticles() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    let articles = [];
    const page = await browser.newPage();
    
    // Configurar user agent para evitar detecção de bot
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    console.log('Navegando para o site do Super.so...');
    await page.goto(SUPER_SITE_URL, { waitUntil: 'networkidle2' });
    
    // Aguarda o carregamento da página
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Debug: verificar se a página carregou
    const pageTitle = await page.title();
    console.log(`Página carregada: ${pageTitle}`);
    
    // Debug: verificar se há links na página
    const allLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a');
      return Array.from(links).map(link => ({
        href: link.href,
        text: link.textContent.trim(),
        className: link.className
      })).filter(link => link.text.length > 0);
    });
    
    console.log(`Total de links encontrados: ${allLinks.length}`);
    console.log('Primeiros 5 links:', allLinks.slice(0, 5));
    
    // Nova extração baseada na estrutura real dos cards
    const cards = await page.evaluate(() => {
      const cards = document.querySelectorAll('.notion-collection-card.gallery');
      return Array.from(cards).map((card, index) => {
        const link = card.querySelector('.notion-link.notion-collection-card__anchor');
        const title = link?.textContent.trim() || '';
        const url = link ? (link.href.startsWith('http') ? link.href : `https://julianomatheusblog.super.site${link.getAttribute('href')}`) : '';
        const coverImage = card.querySelector('img.notion-collection-card__cover')?.src || '';
        const tags = Array.from(card.querySelectorAll('.notion-pill')).map(tag => tag.textContent.trim());
        const publishedDate = card.querySelector('.notion-property__date .date')?.textContent.trim() || '';
        // Se quiser descrição, pode pegar de outro campo, por exemplo:
        // const description = card.querySelector('.notion-property__title')?.textContent.trim() || '';
        return {
          id: (index + 1).toString(),
          title,
          description: '', // ou outro campo se preferir
          coverImage,
          publishedDate,
          tags,
          url
        };
      }).filter(article => article.title && article.url);
    });
    
    if (cards.length > 0) {
      articles = cards;
      console.log(`Artigos extraídos dos cards: ${articles.length}`);
      console.log('Artigos encontrados:', articles.map(a => a.title));
    }
    
    if (articles.length === 0) {
      console.log('Nenhum artigo encontrado, usando dados estáticos...');
      articles = [
        {
          id: "1",
          title: "T.E.T.E.U IA - Assistente de Código Multiplataforma",
          description: "Desenvolvimento de um assistente de programação em Python que integra múltiplas IAs para análise e sugestões de código.",
          coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6bd242a0-b690-42c3-80ae-f7c5d14751db/T.E.T.E.U/w=1920,quality=90,fit=scale-down",
          publishedDate: "26 de Maio, 2024",
          tags: ["Python", "IA", "Desenvolvimento"],
          url: "https://julianomatheusblog.super.site/teteu-ia"
        },
        {
          id: "2",
          title: "Pipeline MLOps - THEMIS",
          description: "Desenvolvimento de um pipeline completo de Machine Learning para detecção de fraudes, com foco em produção e boas práticas.",
          coverImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a777746-05f8-4ce6-9cd8-21bdd71ccc59/THEMIS/w=1920,quality=90,fit=scale-down",
          publishedDate: "12 de Maio, 2024",
          tags: ["MLOps", "Machine Learning", "DevOps"],
          url: "https://julianomatheusblog.super.site/pipeline-mlops-themis"
        }
      ];
    }

    console.log(`Encontrados ${articles.length} artigos`);

    // Salva nos dois locais
    const srcPath = path.join(__dirname, '..', 'src', 'data', 'articles.json');
    const publicPath = path.join(__dirname, '..', 'public', 'data', 'articles.json');
    
    const articlesData = { articles };
    
    // Garante que o diretório existe
    await fs.mkdir(path.dirname(publicPath), { recursive: true });
    
    // Salva os arquivos
    await fs.writeFile(srcPath, JSON.stringify(articlesData, null, 2), 'utf-8');
    await fs.writeFile(publicPath, JSON.stringify(articlesData, null, 2), 'utf-8');
    
    console.log('✅ Artigos sincronizados com sucesso!');
    console.log(`📁 Salvos em: ${srcPath}`);
    console.log(`📁 Salvos em: ${publicPath}`);

  } catch (error) {
    console.error('❌ Erro ao sincronizar artigos:', error);
  } finally {
    await browser.close();
  }
}

// Executa a sincronização
syncArticles(); 