import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, e as addAttribute, g as renderTransition, m as maybeRenderHead } from '../../../../chunks/astro/server_DNwJ7Yw1.mjs';
import { $ as $$Card } from '../../../../chunks/Card_Bdmbh__9.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Pagination } from '../../../../chunks/Pagination_zf5kl8bO.mjs';
import { t as translateFor, S as SUPPORTED_LOCALES, a as SITE, D as DEFAULT_LOCALE } from '../../../../chunks/config_eYlZWC1t.mjs';
import { $ as $$Main } from '../../../../chunks/Main_C37ZdKN8.mjs';
import { g as getSortedPosts } from '../../../../chunks/getSortedPosts_C1-XN2Ia.mjs';
import { b as slugifyAll, g as getPostsGroupedByLocale } from '../../../../chunks/posts_ByIugSTU.mjs';
import { g as getUniqueTags } from '../../../../chunks/getUniqueTags_3ttlWInv.mjs';
/* empty css                                          */
export { renderers } from '../../../../renderers.mjs';

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://zhangxiaohh.github.io");
async function getStaticPaths({ paginate }) {
  const postsByLocale = await getPostsGroupedByLocale({
    allowedLocales: SUPPORTED_LOCALES
  });
  return SUPPORTED_LOCALES.flatMap((localeKey) => {
    const posts = postsByLocale[localeKey] || [];
    const tags = getUniqueTags(posts);
    return tags.flatMap(({ tag, tagName }) => {
      const tagPosts = getPostsByTag(posts, tag);
      return paginate(tagPosts, {
        params: {
          tag,
          locale: localeKey === DEFAULT_LOCALE ? void 0 : localeKey
        },
        props: { tagName },
        pageSize: SITE.postPerPage
      });
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  const t = translateFor(Astro2.currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("tag")}: ${tagName} | ${t("site.title")}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`${t("tag")}:`, `${tagName}`], "titleTransition": tag, "pageDesc": t("tag.desc", { name: tagName }) }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> `, "title": async ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "fquk53gj", "", tag), "data-astro-transition-scope")}>${`${t("tag")}:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/[tag]/[...page].astro", "self");

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/[tag]/[...page].astro";
const $$url = "/vento/[...locale]/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
