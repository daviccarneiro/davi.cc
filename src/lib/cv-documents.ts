export const cvDocuments = [
  {
    id: 'cv-en',
    label: 'English',
    tabLabel: '🇬🇧',
    fileName: 'DaviCarneiro_Resume_en.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_Resume_en.pdf'
  },
  {
    id: 'cv-en-1pager',
    label: 'English 1 Page',
    tabLabel: '🇬🇧 1p',
    fileName: 'DaviCarneiro_Resume_en_1p.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_Resume_en_1p.pdf'
  },
  {
    id: 'cv-br',
    label: 'Brazil',
    tabLabel: '🇧🇷',
    fileName: 'DaviCarneiro_Curriculo_br.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_Curriculo_br.pdf'
  },
  {
    id: 'cv-br-1pager',
    label: 'Brazil 1 Page',
    tabLabel: '🇧🇷 1p',
    fileName: 'DaviCarneiro_Curriculo_br_1p.pdf',
    pdfPath: '/cv-pdfs/DaviCarneiro_Curriculo_br_1p.pdf'
  }
] as const;

export type CvDocumentId = (typeof cvDocuments)[number]['id'];

export const cvDocumentMap = new Map(cvDocuments.map((doc) => [doc.id, doc]));
