import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNwJ7Yw1.mjs';
import { $ as $$Card } from '../../chunks/Card_Bdmbh__9.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_oSD-fAPa.mjs';
import { D as DEFAULT_LOCALE, t as translateFor, g as getLocaleInfo, S as SUPPORTED_LOCALES } from '../../chunks/config_eYlZWC1t.mjs';
import { $ as $$Main } from '../../chunks/Main_C37ZdKN8.mjs';
import { g as getPostsGroupedByLocale } from '../../chunks/posts_ByIugSTU.mjs';
export { renderers } from '../../renderers.mjs';

const getPostsByGroupCondition = (posts, groupFunction) => {
  const result = {};
  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

const $$Astro = createAstro("https://zhangxiaohh.github.io");
async function getStaticPaths() {
  const paths = SUPPORTED_LOCALES.flatMap((locale) => {
    return {
      params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
    };
  });
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const postsByLocale = await getPostsGroupedByLocale({
    draft: false,
    allowedLocales: SUPPORTED_LOCALES
  });
  const posts = postsByLocale[locale] || [];
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("archives")} | ${t("site.title")}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": t("archives"), "pageDesc": t("archives.desc") }, { "default": async ($$result3) => renderTemplate`${Object.entries(
    getPostsByGroupCondition(
      posts,
      (post) => post.data.pubDatetime.getFullYear()
    )
  ).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, yearGroup]) => renderTemplate`${maybeRenderHead()}<div> <span class="text-2xl font-bold"> ${new Date(year).toLocaleDateString(LOCALE.langTag, {
    year: "numeric"
  })} </span> <sup class="text-sm"> ${yearGroup.length.toLocaleString(LOCALE.langTag)} </sup> ${Object.entries(
    getPostsByGroupCondition(
      yearGroup,
      (post) => post.data.pubDatetime.getMonth() + 1
    )
  ).sort(([monthA], [monthB]) => Number(monthB) - Number(monthA)).map(([month, monthGroup]) => renderTemplate`<div class="flex flex-col sm:flex-row"> <div class="mt-6 min-w-36 text-lg sm:my-6"> <span class="font-bold"> ${t(`date.month.${month}`)} </span> <sup class="text-xs"> ${monthGroup.length.toLocaleString(LOCALE.langTag)} </sup> </div> <ul> ${monthGroup.sort(
    (a, b) => Math.floor(
      new Date(b.data.pubDatetime).getTime() / 1e3
    ) - Math.floor(
      new Date(a.data.pubDatetime).getTime() / 1e3
    )
  ).map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> </div>`)} </div>`)}` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/archives/index.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/archives/index.astro";
const $$url = "/vento/[...locale]/archives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
