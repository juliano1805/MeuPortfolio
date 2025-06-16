import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPER_SITE_URL = 'https://julianomatheusblog.super.site';

async function syncArticles() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Acessa a página principal do blog
    await page.goto(SUPER_SITE_URL);
    
    // Aguarda o carregamento dos artigos
    await page.waitForSelector('.notion-collection-card__anchor');
    
    // Extrai os dados dos artigos
    const articles = await page.evaluate(() => {
      const articleLinks = document.querySelectorAll('.notion-collection-card__anchor');
      return Array.from(articleLinks).map((link, index) => {
        return {
          id: (index + 1).toString(),
          title: link.textContent.trim(),
          description: '', // Pode ser expandido depois
          coverImage: '', // Pode ser expandido depois
          publishedDate: '', // Pode ser expandido depois
          tags: ['Blog'],
          url: link.href.startsWith('http') ? link.href : `https://julianomatheusblog.super.site${link.getAttribute('href')}`
        };
      });
    });
    
    // Lê o arquivo articles.json atual
    const articlesPath = path.join(__dirname, '../src/data/articles.json');
    const currentData = JSON.parse(await fs.readFile(articlesPath, 'utf8'));
    
    // Atualiza apenas se houver mudanças
    if (JSON.stringify(currentData.articles) !== JSON.stringify(articles)) {
      await fs.writeFile(
        articlesPath,
        JSON.stringify({ articles }, null, 2),
        'utf8'
      );
      console.log('Artigos atualizados com sucesso!');
    } else {
      console.log('Nenhuma alteração necessária.');
    }
    
  } catch (error) {
    console.error('Erro ao sincronizar artigos:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

syncArticles(); 