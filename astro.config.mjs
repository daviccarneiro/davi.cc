// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  // Cloudflare has no sharp at runtime; optimize local images at build time instead
  adapter: cloudflare({ imageService: 'compile' }),
  output: 'server'
});
