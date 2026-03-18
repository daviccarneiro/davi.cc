import type { APIRoute } from 'astro';
import { mdToPdf } from 'md-to-pdf';
import { cvDocumentMap } from '../../../lib/cv-documents';
import type { CvDocumentId } from '../../../lib/cv-documents';
import { cvContent } from '../../../lib/cv-content';

const getPdfCss = (isOnePager: boolean) => `
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

export const GET: APIRoute = async ({ params }) => {
  const docId = (params.doc || '') as CvDocumentId;
  const doc = cvDocumentMap.get(docId);

  if (!doc) {
    return new Response('Document not found', { status: 404 });
  }

  const markdown = cvContent[doc.id];
  const isOnePager = doc.id.includes('1pager');

  if (!markdown) {
    return new Response('Document content not found', { status: 404 });
  }

  try {
    const pdf = await mdToPdf(
      { content: markdown },
      {
        basedir: process.cwd(),
        css: getPdfCss(isOnePager),
        document_title: doc.fileName.replace(/\.pdf$/i, ''),
        pdf_options: {
          format: 'A4',
          margin: isOnePager
            ? { top: '9mm', right: '9mm', bottom: '11mm', left: '9mm' }
            : { top: '10mm', right: '10mm', bottom: '12mm', left: '10mm' },
          printBackground: true,
          preferCSSPageSize: true
        },
        launch_options: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      }
    );

    if (!pdf?.content) {
      return new Response('Could not generate PDF', { status: 500 });
    }

    return new Response(new Uint8Array(pdf.content), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${doc.fileName}"`
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown PDF generation error';
    return new Response(message, { status: 500 });
  }
};
