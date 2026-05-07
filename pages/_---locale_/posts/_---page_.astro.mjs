import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DNwJ7Yw1.mjs';
import { $ as $$Card } from '../../../chunks/Card_Bdmbh__9.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_zf5kl8bO.mjs';
import { t as translateFor, S as SUPPORTED_LOCALES, a as SITE, D as DEFAULT_LOCALE } from '../../../chunks/config_eYlZWC1t.mjs';
import { $ as $$Main } from '../../../chunks/Main_C37ZdKN8.mjs';
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_C1-XN2Ia.mjs';
import { g as getPostsGroupedByLocale } from '../../../chunks/posts_ByIugSTU.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const getStaticPaths = (async ({ paginate }) => {
  const postsByLocale = await getPostsGroupedByLocale({
    draft: false,
    allowedLocales: SUPPORTED_LOCALES
  });
  const paths = SUPPORTED_LOCALES.flatMap((locale) => {
    const posts = postsByLocale[locale] || [];
    return paginate(getSortedPosts(posts), {
      params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale },
      pageSize: SITE.postPerPage
    });
  });
  return paths;
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const t = translateFor(Astro2.currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("posts")} | ${t("site.title")}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": t("posts"), "pageDesc": t("posts.desc") }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...page].astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...page].astro";
const $$url = "/vento/[...locale]/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
