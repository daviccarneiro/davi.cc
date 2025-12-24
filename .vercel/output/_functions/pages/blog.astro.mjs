import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kdma1tz.mjs';
import { $ as $$Layout } from '../chunks/Layout_BH_obpm-.mjs';
import { g as getCollection } from '../chunks/_astro_content_6Z8z99BM.mjs';
import '../chunks/index_l143NPzF.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CyeHTjcA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | davi.cc", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="page-header" data-astro-cid-5tznm7mj> <div data-astro-cid-5tznm7mj> <p class="kicker" data-i18n-key="blog.header.kicker" data-astro-cid-5tznm7mj>Blog</p> </div> <p class="lead" data-i18n-key="blog.header.lead" data-astro-cid-5tznm7mj>Nada daqui tem DOI nem qualis, mas é digitado com o coração e (quase) sem IA.</p> </header> <ul class="post-list" data-astro-cid-5tznm7mj> ${allPosts.map((post) => renderTemplate`<li class="post-item" data-astro-cid-5tznm7mj> <a class="post-link"${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> ${post.data.heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.heroImage, "width": 260, "height": 160, "format": "webp", "alt": post.data.title, "class": "thumb", "data-astro-cid-5tznm7mj": true })}`} <div class="meta" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>${post.data.title}</h3> <p data-astro-cid-5tznm7mj>${post.data.description}</p> <span class="date"${addAttribute(post.data.pubDate.toISOString(), "data-date")} data-astro-cid-5tznm7mj></span> </div> </a> </li>`)} </ul> ` })} `;
}, "/home/runner/work/davi.cc/davi.cc/src/pages/blog/index.astro", void 0);

const $$file = "/home/runner/work/davi.cc/davi.cc/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
