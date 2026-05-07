import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DNwJ7Yw1.mjs';
import { t as translateFor, g as getLocaleInfo, s as stripBaseAndLocale } from './config_eYlZWC1t.mjs';
import { d as createSvgComponent, b as $$LinkButton } from './Footer_oSD-fAPa.mjs';
import { I as IconArrowRight } from './IconArrowRight_T5kiI7Gt.mjs';

const IconArrowLeft = createSvgComponent({"meta":{"src":"/vento/_astro/IconArrowLeft.7rKuNJsZ.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 12l14 0\" /><path d=\"M5 12l6 6\" /><path d=\"M5 12l6 -6\" />"});

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  const { page } = Astro2.props;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${page.lastPage > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-auto mb-8 flex justify-center"${addAttribute(t("a11y.pagination"), "aria-label")}>${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.prev, "href": stripBaseAndLocale(currentLocale, page.url.prev ?? ""), "class:list": ["me-4 select-none", { "opacity-50": !page.url.prev }], "ariaLabel": "Previous" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconArrowLeft", IconArrowLeft, { "class": "inline-block rtl:rotate-180" })}${" "}${t("pagination.prev")}` })}${page.currentPage.toLocaleString(LOCALE.langTag)} /${" "}${page.lastPage.toLocaleString(LOCALE.langTag)}${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.next, "href": stripBaseAndLocale(currentLocale, page.url.next ?? ""), "class:list": ["ms-4 select-none", { "opacity-50": !page.url.next }], "ariaLabel": "Next" }, { "default": ($$result2) => renderTemplate`${t("pagination.next")}${" "}${renderComponent($$result2, "IconArrowRight", IconArrowRight, { "class": "inline-block rtl:rotate-180" })}` })}</nav>`}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
