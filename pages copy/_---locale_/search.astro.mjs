import { c as createAstro, a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute, h as createTransitionScope } from '../../chunks/astro/server_DNwJ7Yw1.mjs';
/* empty css                                     */
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Main } from '../../chunks/Main_C37ZdKN8.mjs';
import { D as DEFAULT_LOCALE, t as translateFor, S as SUPPORTED_LOCALES } from '../../chunks/config_eYlZWC1t.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
async function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
  }));
}
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const t = translateFor(locale);
  const backUrl = `${Astro2.url.pathname}` ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("search")} | ${t("site.title")}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": t("search"), "pageDesc": `${t("search.desc")} ...` }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="pagefind-search"${addAttribute(backUrl, "data-backurl")}${addAttribute(createTransitionScope($$result3, "436ktj27"), "data-astro-transition-persist")}></div> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/search.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/search.astro", "self");

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/search.astro";
const $$url = "/vento/[...locale]/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
