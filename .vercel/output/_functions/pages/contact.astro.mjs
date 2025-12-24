import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_8Kdma1tz.mjs';
import { $ as $$Layout } from '../chunks/Layout_BH_obpm-.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "davi.cc | Contact", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact" data-astro-cid-uw5kdbxl> <p class="subtitle" data-i18n-key="contact.subtitle" data-astro-cid-uw5kdbxl>Tem uma ideia, projeto ou dúvida? Envie uma mensagem.</p> <form class="contact-form" id="contact-form" novalidate data-astro-cid-uw5kdbxl> <div class="field" data-astro-cid-uw5kdbxl> <label for="name" data-i18n-key="contact.nameLabel" data-astro-cid-uw5kdbxl>Nome</label> <input type="text" id="name" name="name" required placeholder="Seu nome" data-i18n-placeholder="contact.namePh" data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="email" data-i18n-key="contact.emailLabel" data-astro-cid-uw5kdbxl>Email</label> <input type="email" id="email" name="email" required placeholder="voce@exemplo.com" data-i18n-placeholder="contact.emailPh" data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="subject" data-i18n-key="contact.subjectLabel" data-astro-cid-uw5kdbxl>Assunto</label> <input type="text" id="subject" name="subject" placeholder="Sobre o que é?" data-i18n-placeholder="contact.subjectPh" data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="message" data-i18n-key="contact.messageLabel" data-astro-cid-uw5kdbxl>Mensagem</label> <textarea id="message" name="message" required rows="6" placeholder="Escreva sua mensagem..." data-i18n-placeholder="contact.messagePh" data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="btn-primary" id="submit-btn" data-i18n-key="contact.submit" data-astro-cid-uw5kdbxl>Enviar</button> <p class="form-status" id="form-status" role="status" aria-live="polite" data-astro-cid-uw5kdbxl></p> </form> </section>  ${renderScript($$result2, "/home/runner/work/davi.cc/davi.cc/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/runner/work/davi.cc/davi.cc/src/pages/contact.astro", void 0);

const $$file = "/home/runner/work/davi.cc/davi.cc/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
