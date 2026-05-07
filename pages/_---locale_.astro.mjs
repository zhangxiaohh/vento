import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderScript, b as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_DNwJ7Yw1.mjs';
import { I as IconArrowRight } from '../chunks/IconArrowRight_T5kiI7Gt.mjs';
import { $ as $$Card } from '../chunks/Card_Bdmbh__9.mjs';
import { $ as $$Layout, a as $$Header, b as $$LinkButton, e as SOCIALS, f as $$Socials, g as $$Hr, c as $$Footer } from '../chunks/Footer_oSD-fAPa.mjs';
/* empty css                                 */
import { D as DEFAULT_LOCALE, t as translateFor, S as SUPPORTED_LOCALES, b as getRelativeLocalePath, a as SITE } from '../chunks/config_eYlZWC1t.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_C1-XN2Ia.mjs';
import { a as getPostsByLocale } from '../chunks/posts_ByIugSTU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://zhangxiaohh.github.io");
const $$TypeWriter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TypeWriter;
  const {
    texts,
    typingSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2e3,
    class: className = ""
  } = Astro2.props;
  const textsJson = JSON.stringify(texts);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`typewriter ${className}`, "class")}${addAttribute(textsJson, "data-texts")}${addAttribute(typingSpeed, "data-typing-speed")}${addAttribute(deleteSpeed, "data-delete-speed")}${addAttribute(pauseTime, "data-pause-time")} data-astro-cid-ijrvn4ib> <span class="typewriter-text" data-astro-cid-ijrvn4ib></span> <span class="typewriter-cursor" data-astro-cid-ijrvn4ib>|</span> </span>  ${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/TypeWriter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/TypeWriter.astro", void 0);

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const getStaticPaths = (async () => SUPPORTED_LOCALES.map((locale) => ({
  params: { locale: locale === DEFAULT_LOCALE ? void 0 : locale }
})));
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const posts = await getPostsByLocale(locale);
  const t = translateFor(Astro2.currentLocale);
  const sortedPosts = getSortedPosts(posts);
  const featuredPosts = sortedPosts.filter(({ data }) => data.featured);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" data-layout="index"${addAttribute(getRelativeLocalePath(locale, "/"), "data-backurl")}> <section id="hero" class="pt-8 pb-6"> <h1 class="my-4 inline-block text-[2rem] font-bold sm:my-8 sm:text-[2.5rem]"> ${t("hero.title")} </h1> <p class="hero-typing"> ${renderComponent($$result2, "TypeWriter", $$TypeWriter, { "texts": t("hero.typingTexts"), "typingSpeed": 150, "deleteSpeed": 80, "pauseTime": 3e3 })} </p> <p class="mt-2"> ${t("hero.beforeReadme")} ${renderComponent($$result2, "LinkButton", $$LinkButton, { "class": "underline decoration-dashed underline-offset-4 hover:text-accent", "href": "https://github.com/satnaing/astro-paper#readme" }, { "default": async ($$result3) => renderTemplate`${t("hero.readme")}` })} ${t("hero.afterReadme")} </p> ${// only display if at least one social link is enabled
  SOCIALS.length > 0 && renderTemplate`<div class="mt-4 flex flex-col sm:flex-row sm:items-center"> <div class="me-2 mb-1 whitespace-nowrap sm:mb-0"> ${t("socialLinks")}:
</div> ${renderComponent($$result2, "Socials", $$Socials, {})} </div>`} </section> ${renderComponent($$result2, "Hr", $$Hr, {})} ${featuredPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <section id="featured" class="pt-12 pb-6"> <h2 class="text-2xl font-semibold tracking-wide"> ${t("featured")} </h2> <ul> ${featuredPosts.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data, "variant": "h3" })}`)} </ul> </section> ${recentPosts.length > 0 && renderTemplate`${renderComponent($$result3, "Hr", $$Hr, {})}`}` })}`} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="pt-12 pb-6"> <h2 class="text-2xl font-semibold tracking-wide"> ${t("recentPosts")} </h2> <ul> ${recentPosts.map(
    (data, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", $$Card, { "variant": "h3", ...data })}`
  )} </ul> </section>`} <div class="my-8 text-center"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/" }, { "default": async ($$result3) => renderTemplate`${t("allPosts")}${" "}${renderComponent($$result3, "IconArrowRight", IconArrowRight, { "class": "inline-block rtl:rotate-180" })} ` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro";
const $$url = "/vento/[...locale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
