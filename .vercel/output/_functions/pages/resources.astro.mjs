import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kdma1tz.mjs';
import { $ as $$Layout } from '../chunks/Layout_BH_obpm-.mjs';
import { g as getCollection } from '../chunks/_astro_content_6Z8z99BM.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const resources = await getCollection("resources");
  const fetchOgData = async (url) => {
    try {
      const resp = await fetch(url, { redirect: "follow" });
      const html = await resp.text();
      const pick = (prop) => {
        const re = new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["'][^>]*>`, "i");
        const m = html.match(re);
        return m ? m[1] : "";
      };
      const ogTitle = pick("og:title") || "";
      const ogDesc = pick("og:description") || "";
      const ogImage = pick("og:image") || "";
      return { ogTitle, ogDesc, ogImage };
    } catch {
      return { ogTitle: "", ogDesc: "", ogImage: "" };
    }
  };
  const truncate = (text, max) => {
    if (!text) return "";
    const str = String(text).trim();
    if (str.length <= max) return str;
    return str.slice(0, max - 1).trimEnd() + "...";
  };
  const cards = await Promise.all(
    resources.map(async (entry) => {
      const { url, overrideTitle, overrideDescription, overrideImage } = entry.data;
      const og = await fetchOgData(url);
      return {
        url,
        title: truncate(overrideTitle || og.ogTitle || url, 64),
        description: truncate(overrideDescription || og.ogDesc || "", 160),
        image: overrideImage || og.ogImage || "",
        host: (() => {
          try {
            return new URL(url).host;
          } catch {
            return "";
          }
        })()
      };
    })
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "davi.cc | Resources", "data-astro-cid-gauq755v": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="resources" data-astro-cid-gauq755v> <ul class="grid" data-astro-cid-gauq755v> ${cards.map((card) => renderTemplate`<li class="card" data-astro-cid-gauq755v> <a class="card-link"${addAttribute(card.url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-gauq755v> <div class="thumb"${addAttribute(`background-image: url('${card.image}');`, "style")} data-astro-cid-gauq755v></div> <div class="meta" data-astro-cid-gauq755v> <h3 data-astro-cid-gauq755v>${card.title}</h3> ${card.description && renderTemplate`<p data-astro-cid-gauq755v>${card.description}</p>`} ${card.host && renderTemplate`<span class="host" data-astro-cid-gauq755v>${card.host}</span>`} </div> </a> </li>`)} </ul> </section>  ` })}`;
}, "/home/runner/work/davi.cc/davi.cc/src/pages/resources.astro", void 0);

const $$file = "/home/runner/work/davi.cc/davi.cc/src/pages/resources.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
