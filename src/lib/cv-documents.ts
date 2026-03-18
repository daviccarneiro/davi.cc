export const cvDocuments = [
  {
    id: 'cv-us',
    label: 'USA',
    tabLabel: '🇺🇸',
    fileName: 'DaviCarneiro_CV_us.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_CV_us.pdf'
  },
  {
    id: 'cv-us-1pager',
    label: 'USA 1 Page',
    tabLabel: '🇺🇸 1p',
    fileName: 'DaviCarneiro_CV_us_1p.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_CV_us_1p.pdf'
  },
  {
    id: 'cv-br',
    label: 'Brazil',
    tabLabel: '🇧🇷',
    fileName: 'DaviCarneiro_CV_br.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_CV_br.pdf'
  },
  {
    id: 'cv-br-1pager',
    label: 'Brazil 1 Page',
    tabLabel: '🇧🇷 1p',
    fileName: 'DaviCarneiro_CV_br_1p.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_CV_br_1p.pdf'
  }
] as const;

export type CvDocumentId = (typeof cvDocuments)[number]['id'];

export const cvDocumentMap = new Map(cvDocuments.map((doc) => [doc.id, doc]));
