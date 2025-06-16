import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPER_SITE_URL = 'https://julianomatheusblog.super.site';

async function syncArticles() {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  try {
    const page = await browser.newPage();
    await page.goto(SUPER_SITE_URL);
    
    // Aguarda o carregamento dos artigos
    await page.waitForSelector('.notion-collection-card__anchor');
    
    // Extrai os dados dos artigos
    const articles = await page.evaluate(() => {
      const articleLinks = document.querySelectorAll('.notion-collection-card__anchor');
      return Array.from(articleLinks)
        .map((link, index) => {
          // Pega o card pai do link
          const card = link.closest('.notion-collection-card');
          
          // Pega a descrição (se existir)
          const description = card?.querySelector('.notion-collection-card__description')?.textContent?.trim() || '';
          
          // Pega a imagem (se existir)
          const imageElement = card?.querySelector('img');
          const coverImage = imageElement?.src || '';
          
          // Pega a data (se existir)
          const dateElement = card?.querySelector('.notion-property__date .date');
          const publishedDate = dateElement?.textContent?.trim() || '';
          
          // Pega as tags (se existirem)
          const tagElements = card?.querySelectorAll('.notion-collection-card__tag');
          const tags = Array.from(tagElements || []).map(tag => tag.textContent.trim());
          
          return {
            id: (index + 1).toString(),
            title: link.textContent.trim(),
            description,
            coverImage,
            publishedDate,
            tags: tags.length > 0 ? tags : ['Blog'],
            url: link.href.startsWith('http') ? link.href : `https://julianomatheusblog.super.site${link.getAttribute('href')}`
          };
        })
        .filter(article => article.title); // Remove artigos sem título
    });

    // Lê o arquivo atual
    const articlesPath = path.join(__dirname, '..', 'src', 'data', 'articles.json');
    const currentContent = await fs.readFile(articlesPath, 'utf-8');
    const currentData = JSON.parse(currentContent);

    // Verifica se houve alterações
    if (JSON.stringify(currentData.articles) !== JSON.stringify(articles)) {
      // Atualiza o arquivo
      await fs.writeFile(
        articlesPath,
        JSON.stringify({ articles }, null, 2),
        'utf-8'
      );
      console.log('Artigos atualizados com sucesso!');
    } else {
      console.log('Nenhuma alteração necessária.');
    }

  } catch (error) {
    console.error('Erro ao sincronizar artigos:', error);
  } finally {
    await browser.close();
  }
}

syncArticles(); 