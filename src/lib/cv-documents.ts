export type CvDocumentId = 'ptbr' | 'enus';

export type CvDocument = {
  id: CvDocumentId;
  label: string;
  shortLabel: string;
  fileName: string;
  embedUrl: string;
  mobileEmbedUrl: string;
  documentUrl: string;
  pdfUrl: string;
};

const documentUrl = 'https://docs.google.com/document/d/1hJUIlXSjLCWKfdmPdF7AG7LJZXM5ic7n2hTKPYSMJJY';

const createDocument = (
  id: CvDocumentId,
  label: string,
  shortLabel: string,
  fileName: string,
  tabId: string
): CvDocument => ({
  id,
  label,
  shortLabel,
  fileName,
  embedUrl: `${documentUrl}/preview?tab=${tabId}`,
  mobileEmbedUrl: `${documentUrl}/mobilebasic?tab=${tabId}`,
  documentUrl: `${documentUrl}/edit?tab=${tabId}`,
  pdfUrl: `${documentUrl}/export?format=pdf&tab=${tabId}`
});

export const cvDocuments: CvDocument[] = [
  createDocument('ptbr', 'Português (BR)', 'PT/BR', 'DaviCarneiro_Curriculo_ptbr.pdf', 't.a83gc2up999m'),
  createDocument('enus', 'English (US)', 'EN/US', 'DaviCarneiro_Resume_en.pdf', 't.0')
];

export const getCvDocument = (id: string | null | undefined): CvDocument | undefined =>
  cvDocuments.find((doc) => doc.id === id);
