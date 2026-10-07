import { defineMiddleware } from 'astro:middleware';

const NOINDEX_HOSTS = new Set(['staging.davi.cc']);

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const host = context.request.headers.get('host')?.split(':')[0] ?? '';
  if (NOINDEX_HOSTS.has(host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
});
