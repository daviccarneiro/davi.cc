// The @astrojs/cloudflare adapter emits the server bundle at dist/_worker.js/
// and dist/_routes.json alongside the static assets in dist/. When deploying as
// a Worker (assets.directory = ./dist), wrangler would upload those as public
// assets. This writes an .assetsignore so they are excluded from the asset upload.
import { writeFileSync } from 'node:fs';

writeFileSync(new URL('../dist/.assetsignore', import.meta.url), '_worker.js\n_routes.json\n');
console.log('Wrote dist/.assetsignore (_worker.js, _routes.json)');
