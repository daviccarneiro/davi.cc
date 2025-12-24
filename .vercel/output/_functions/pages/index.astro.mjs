import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kdma1tz.mjs';
import { $ as $$Layout } from '../chunks/Layout_BH_obpm-.mjs';
import { g as getCollection } from '../chunks/_astro_content_6Z8z99BM.mjs';
import '../chunks/index_l143NPzF.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CyeHTjcA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "davi.cc | Portf\xF3lio e Blog", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="intro" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
Não sou ninguém que dispense apresentações, tampouco Forbes Under30 ou qualquer outra grande nomeação. Mas sou e tento ser bom no que faço.
</p> </section> <section class="recent" data-astro-cid-j7pv25f6> <div class="section-heading" data-astro-cid-j7pv25f6> <h2 data-i18n-key="home.recent" data-astro-cid-j7pv25f6>Postagens recentes</h2> <a class="more" href="/blog" data-i18n-key="home.viewAll" data-astro-cid-j7pv25f6>Ver tudo</a> </div> <ul class="recent-posts" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<li class="post-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="post-link" data-astro-cid-j7pv25f6> ${post.data.heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.heroImage, "width": 200, "height": 128, "format": "webp", "alt": post.data.title, "class": "thumb", "data-astro-cid-j7pv25f6": true })}`} <div class="meta" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${post.data.title}</h3> <p data-astro-cid-j7pv25f6>${post.data.description}</p> <span class="date" data-astro-cid-j7pv25f6>${post.data.pubDate.toLocaleDateString("pt-BR")}</span> </div> </a> </li>`)} </ul> </section> ` })} `;
}, "/home/runner/work/davi.cc/davi.cc/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/davi.cc/davi.cc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
