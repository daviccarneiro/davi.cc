import { mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import puppeteer from 'puppeteer';
import { marked } from 'marked';

const root = process.cwd();
const outputDir = resolve(root, 'public/cv-pdfs');

const docs = [
  {
    id: 'cv-en',
    source: resolve(root, 'public/cv-en.md'),
    dest: resolve(outputDir, 'DaviCarneiro_Resume_en.pdf')
  },
  {
    id: 'cv-en-1pager',
    source: resolve(root, 'public/cv-en-1pager.md'),
    dest: resolve(outputDir, 'DaviCarneiro_Resume_en_1p.pdf')
  },
  {
    id: 'cv-br',
    source: resolve(root, 'public/cv-br.md'),
    dest: resolve(outputDir, 'DaviCarneiro_Curriculo_br.pdf')
  },
  {
    id: 'cv-br-1pager',
    source: resolve(root, 'public/cv-br-1pager.md'),
    dest: resolve(outputDir, 'DaviCarneiro_Curriculo_br_1p.pdf')
  }
];

const getPdfCss = (isOnePager) => `
  @page {
    size: A4;
    margin: ${isOnePager ? '9mm 9mm 11mm 9mm' : '10mm 10mm 12mm 10mm'};
  }

  body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #111827;
    line-height: ${isOnePager ? '1.42' : '1.48'};
    font-size: ${isOnePager ? '9.4pt' : '10pt'};
    margin: 0;
  }

  h1, h2, h3, p, ul {
    margin: 0;
  }

  h1 {
    font-size: ${isOnePager ? '22pt' : '23.5pt'};
    line-height: 1.05;
    letter-spacing: -0.04em;
    margin-bottom: ${isOnePager ? '10pt' : '12pt'};
  }

  h2 {
    font-size: ${isOnePager ? '8.7pt' : '9.1pt'};
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #4b5563;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 3pt;
    margin-top: ${isOnePager ? '10pt' : '12pt'};
    margin-bottom: ${isOnePager ? '6pt' : '7pt'};
    page-break-after: avoid;
  }

  h3 {
    font-size: ${isOnePager ? '10pt' : '10.5pt'};
    line-height: 1.22;
    margin-top: ${isOnePager ? '6pt' : '7pt'};
    margin-bottom: ${isOnePager ? '4pt' : '5pt'};
    page-break-after: avoid;
  }

  p {
    color: #374151;
    margin-bottom: ${isOnePager ? '5pt' : '6pt'};
  }

  ul {
    padding-left: 15pt;
    margin-bottom: ${isOnePager ? '5pt' : '6pt'};
  }

  li {
    color: #374151;
    margin-bottom: ${isOnePager ? '2.5pt' : '3pt'};
  }

  strong {
    color: #111827;
  }

  .page-break,
  .cv-section {
    break-inside: avoid-page;
    page-break-inside: avoid;
  }
`;

await mkdir(outputDir, { recursive: true });

marked.setOptions({ gfm: true, breaks: false });

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  for (const doc of docs) {
    const markdown = await readFile(doc.source, 'utf8');
    const isOnePager = doc.id.includes('1pager');
    const html = `<!doctype html>
<html lang="${doc.id.includes('-br') ? 'pt-BR' : 'en'}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${doc.dest.split('/').pop()?.replace(/\.pdf$/i, '') || 'CV'}</title>
    <style>${getPdfCss(isOnePager)}</style>
  </head>
  <body>
    ${marked.parse(markdown)}
  </body>
</html>`;

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({
      path: doc.dest,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: isOnePager
        ? { top: '9mm', right: '9mm', bottom: '11mm', left: '9mm' }
        : { top: '10mm', right: '10mm', bottom: '12mm', left: '10mm' }
    });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log('CV PDFs generated successfully.');
