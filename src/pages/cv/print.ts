import type { APIRoute } from 'astro';
import { cvDocuments, getCvDocument } from '../../lib/cv-documents';

export const prerender = false;

export const GET: APIRoute = ({ url, redirect }) => {
  const doc = getCvDocument(url.searchParams.get('doc')) ?? cvDocuments[0]!;
  return redirect(doc.pdfUrl, 302);
};
