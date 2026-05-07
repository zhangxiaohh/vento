import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from '../../chunks/astro/server_DNwJ7Yw1.mjs';
import { t as translateFor, D as DEFAULT_LOCALE, S as SUPPORTED_LOCALES } from '../../chunks/config_eYlZWC1t.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_BwUEjV2L.mjs';
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_8X779-9-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://zhangxiaohh.github.io");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const t = translateFor(Astro2.currentLocale);
  const { frontmatter } = Astro2.props;
  const siteTitle = t("site.title");
  const pageTitle = t("about");
  const title = `${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} | ${siteTitle}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-app prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/AboutLayout.astro", void 0);

const getAboutForLocale = async (locale) => getEntry("about", `about${locale}`);

const $$Astro = createAstro("https://zhangxiaohh.github.io");
async function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({
    params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
  }));
}
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const about = await getAboutForLocale(locale);
  let Content;
  let frontmatter = {
    title: ""
  };
  if (about) {
    const rendered = await renderEntry(about);
    Content = rendered.Content;
    frontmatter = {
      title: about.data.title,
      description: about.data.description
    };
  }
  return renderTemplate`${renderComponent($$result, "AboutLayout", $$AboutLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate`${Content ? renderTemplate`${renderComponent($$result2, "Content", Content, {})}` : renderTemplate`${maybeRenderHead()}<p></p>`}` })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/about.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/about.astro";
const $$url = "/vento/[...locale]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
