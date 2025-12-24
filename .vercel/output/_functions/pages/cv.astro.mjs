import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_8Kdma1tz.mjs';
import { $ as $$Layout } from '../chunks/Layout_BH_obpm-.mjs';
/* empty css                              */
export { renderers } from '../renderers.mjs';

const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "davi.cc | CV", "data-astro-cid-zuwcdr5b": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="cv" data-astro-cid-zuwcdr5b> <section class="doc-embed" data-astro-cid-zuwcdr5b> <div class="doc-frame" data-astro-cid-zuwcdr5b> <iframe id="cv-embed" data-src-en="https://docs.google.com/document/d/1lkygIyyVerzO7K1bhU-2Q0SazfapZMll04-sidCQmJc/preview?rm=minimal" data-src-pt="https://docs.google.com/document/d/1lkygIyyVerzO7K1bhU-2Q0SazfapZMll04-sidCQmJc/preview?rm=minimal" allow="clipboard-write; encrypted-media" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-zuwcdr5b></iframe> </div> </section> <div class="cv-actions" data-astro-cid-zuwcdr5b> <a id="download-pdf-link" class="btn" href="/cv.pdf" download data-i18n-key="cv.download" data-astro-cid-zuwcdr5b>Download as PDF</a> <button type="button" id="share-cv" class="btn outline" data-i18n-key="cv.share" data-astro-cid-zuwcdr5b>Share this CV</button> </div> </section>  ${renderScript($$result2, "/home/runner/work/davi.cc/davi.cc/src/pages/cv.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/runner/work/davi.cc/davi.cc/src/pages/cv.astro", void 0);

const $$file = "/home/runner/work/davi.cc/davi.cc/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
