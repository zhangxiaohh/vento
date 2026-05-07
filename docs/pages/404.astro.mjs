import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNwJ7Yw1.mjs';
import { $ as $$Layout, a as $$Header, b as $$LinkButton, c as $$Footer } from '../chunks/Footer_oSD-fAPa.mjs';
import { t as translateFor, g as getLocaleInfo } from '../chunks/config_eYlZWC1t.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  const local404 = 404 .toLocaleString(LOCALE.langTag);
  const title = `${local404} ${t("notFound")} | ${t("site.title")}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" class="mx-auto flex max-w-app flex-1 items-center justify-center"> <div class="mb-14 flex flex-col items-center justify-center"> <h1 class="text-9xl font-bold text-accent">${local404}</h1> <span aria-hidden="true" style="unicode-bidi: isolate; direction: ltr;">¯\\_(ツ)_/¯</span> <p class="mt-4 text-2xl sm:text-3xl">${t("pageNotFound")}</p> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "class": "my-6 text-lg underline decoration-dashed underline-offset-8" }, { "default": ($$result3) => renderTemplate`${t("navigation.goBackHome")}` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/404.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/404.astro";
const $$url = "/vento/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
