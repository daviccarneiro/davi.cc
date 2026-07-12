// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  // Cloudflare has no sharp at runtime, and SSR pages still emit /_image URLs
  // that 404 on Workers. Serve imported images directly (no runtime endpoint).
  adapter: cloudflare({ imageService: 'passthrough' }),
  output: 'server'
});
