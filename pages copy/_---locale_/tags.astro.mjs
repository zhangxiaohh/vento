import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNwJ7Yw1.mjs';
import { $ as $$Main } from '../../chunks/Main_C37ZdKN8.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Tag } from '../../chunks/Tag_BRHL65X9.mjs';
import { g as getUniqueTags } from '../../chunks/getUniqueTags_3ttlWInv.mjs';
import { D as DEFAULT_LOCALE, t as translateFor, S as SUPPORTED_LOCALES } from '../../chunks/config_eYlZWC1t.mjs';
import { a as getPostsByLocale } from '../../chunks/posts_ByIugSTU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const getStaticPaths = async () => {
  return SUPPORTED_LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
  }));
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const posts = await getPostsByLocale(locale);
  const t = translateFor(Astro2.currentLocale);
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("tags")} | ${t("site.title")}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": t("tags"), "pageDesc": t("tags.desc") }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag, tagName }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "tagName": tagName, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/index.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/index.astro";
const $$url = "/vento/[...locale]/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
