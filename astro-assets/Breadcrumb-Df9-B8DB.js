import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server-DNwJ7Yw1.js';
import { t as translateFor, g as getLocaleInfo, i as isLocaleKey, b as getRelativeLocalePath } from './config-CoUBcFaH.js';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  const pathname = Astro2.url.pathname.slice("/vento/".length);
  const currentUrlPath = pathname.replaceAll(/^\/+|\/+$/g, "");
  const breadcrumbList = currentUrlPath.split("/");
  if (isLocaleKey(breadcrumbList[0])) {
    breadcrumbList.splice(0, 1);
  }
  const breadcrumbListUrls = [...breadcrumbList];
  if (breadcrumbList[0] !== "posts")
    breadcrumbList[0] = t(breadcrumbList[0]);
  if (breadcrumbList[0] === "posts") {
    breadcrumbList.splice(
      0,
      2,
      `${t("posts")} (${t("pageWithNo", { no: parseInt(breadcrumbList[1] || "1").toLocaleString(LOCALE.langTag) })})`
    );
  }
  if (breadcrumbList[0] === "tags" && !isNaN(Number(breadcrumbList[2]))) {
    breadcrumbList.splice(
      1,
      3,
      `${breadcrumbList[1]} ${Number(breadcrumbList[2]) === 1 ? "" : `(${t("pageWithNo", { no: breadcrumbList[2] })})`}`
    );
  }
  return renderTemplate`${maybeRenderHead()}<nav class="mx-auto mt-8 mb-1 w-full max-w-app px-4"${addAttribute(t("a11y.breadcrumb"), "aria-label")}> <ul class="font-light [&>li]:inline [&>li:not(:last-child)>a]:hover:opacity-100"> <li> <a${addAttribute(getRelativeLocalePath(Astro2.currentLocale, "/"), "href")} class="opacity-80">${t("home")}</a> <span aria-hidden="true" class="opacity-80">&raquo;</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li> <span${addAttribute(["capitalize opacity-75", { lowercase: index > 0 }], "class:list")} aria-current="page">  ${decodeURIComponent(breadcrumb)} </span> </li>` : (
      // This case happens only in tags section
      renderTemplate`<li> <a${addAttribute(getRelativeLocalePath(
        Astro2.currentLocale,
        `/${breadcrumbListUrls[index]}/`
      ), "href")} class="capitalize opacity-70"> ${breadcrumb} </a> <span aria-hidden="true">&raquo;</span> </li>`
    )
  )} </ul> </nav>`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
