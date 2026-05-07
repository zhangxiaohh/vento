import '../../../../chunks/_astro_content_8X779-9-.mjs';
import { g as getPath } from '../../../../chunks/getPath_CY-jyiSH.mjs';
import { a as generateOgImageForPost } from '../../../../chunks/generateOgImages_CkoY28kj.mjs';
import { S as SUPPORTED_LOCALES, D as DEFAULT_LOCALE, g as getLocaleInfo } from '../../../../chunks/config_eYlZWC1t.mjs';
import { g as getPostsGroupedByLocale } from '../../../../chunks/posts_ByIugSTU.mjs';
export { renderers } from '../../../../renderers.mjs';

async function getStaticPaths() {
  const postsByLocale = await getPostsGroupedByLocale({
    draft: false,
    allowedLocales: SUPPORTED_LOCALES
  });
  const paths = SUPPORTED_LOCALES.flatMap((locale) => {
    const posts = postsByLocale[locale] || [];
    const postsWithoutOgImage = posts.filter(({ data }) => !data.ogImage);
    return postsWithoutOgImage.map((post) => ({
      params: {
        locale: locale === DEFAULT_LOCALE ? void 0 : locale,
        slug: getPath(post.id, post.filePath, false)
      },
      props: post
    }));
  });
  return paths;
}
const GET = async ({ params, props }) => {
  const { locale = DEFAULT_LOCALE } = params;
  return new Response(
    await generateOgImageForPost(
      props,
      locale,
      getLocaleInfo(locale)
    ),
    {
      headers: { "Content-Type": "image/png" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
