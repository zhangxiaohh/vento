import { g as generateOgImageForSite } from '../../chunks/generateOgImages_CkoY28kj.mjs';
import { S as SUPPORTED_LOCALES, D as DEFAULT_LOCALE, g as getLocaleInfo } from '../../chunks/config_eYlZWC1t.mjs';
export { renderers } from '../../renderers.mjs';

async function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
  }));
}
const GET = async ({ params }) => {
  const { locale: localeKey = DEFAULT_LOCALE } = params;
  return new Response(
    await generateOgImageForSite(localeKey, getLocaleInfo(localeKey)),
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
