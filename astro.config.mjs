// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// Load Vercel adapter only if available (prevents local dev crash if not installed)
let vercelAdapter;
try {
  const { default: vercel } = await import('@astrojs/vercel/server');
  vercelAdapter = vercel();
} catch {}

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  ...(vercelAdapter ? { adapter: vercelAdapter } : {}),
  output: 'server'
});