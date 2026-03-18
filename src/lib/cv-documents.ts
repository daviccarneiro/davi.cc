export const cvDocuments = [
  {
    id: 'cv-us',
    label: 'USA',
    tabLabel: '🇺🇸',
    fileName: 'DaviCarneiro_CV_us.pdf',
    source: '../../public/cv-us.md'
  },
  {
    id: 'cv-us-1pager',
    label: 'USA 1 Page',
    tabLabel: '🇺🇸 1p',
    fileName: 'DaviCarneiro_CV_us_1p.pdf',
    source: '../../public/cv-us-1pager.md'
  },
  {
    id: 'cv-br',
    label: 'Brazil',
    tabLabel: '🇧🇷',
    fileName: 'DaviCarneiro_CV_br.pdf',
    source: '../../public/cv-br.md'
  },
  {
    id: 'cv-br-1pager',
    label: 'Brazil 1 Page',
    tabLabel: '🇧🇷 1p',
    fileName: 'DaviCarneiro_CV_br_1p.pdf',
    source: '../../public/cv-br-1pager.md'
  }
] as const;

export type CvDocumentId = (typeof cvDocuments)[number]['id'];

export const cvDocumentMap = new Map(cvDocuments.map((doc) => [doc.id, doc]));
