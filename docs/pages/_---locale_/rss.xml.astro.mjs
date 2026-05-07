import rss from '@astrojs/rss';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_C1-XN2Ia.mjs';
import { S as SUPPORTED_LOCALES, D as DEFAULT_LOCALE, t as translateFor, b as getRelativeLocalePath, a as SITE } from '../../chunks/config_eYlZWC1t.mjs';
import { g as getPostsGroupedByLocale } from '../../chunks/posts_ByIugSTU.mjs';
import { g as getPath } from '../../chunks/getPath_CY-jyiSH.mjs';
export { renderers } from '../../renderers.mjs';

async function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
  }));
}
async function GET(context) {
  const { locale = DEFAULT_LOCALE } = context.params;
  const t = translateFor(locale);
  const postsByLocale = await getPostsGroupedByLocale({
    allowedLocales: SUPPORTED_LOCALES
  });
  const posts = postsByLocale[locale];
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: t("site.title"),
    description: t("site.desc"),
    site: new URL(getRelativeLocalePath(locale), SITE.website).href,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getRelativeLocalePath(locale, getPath(id, filePath)),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime)
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
