import { c as createAstro, a as createComponent, b as renderTemplate, e as addAttribute, d as renderSlot, I as renderHead, f as renderScript, r as renderComponent, F as Fragment, C as unescapeHTML, m as maybeRenderHead, s as spreadAttributes } from './astro/server-DNwJ7Yw1.js';
import { t as translateFor, g as getLocaleInfo, a as SITE, b as getRelativeLocalePath, D as DEFAULT_LOCALE } from './config-CoUBcFaH.js';
/* empty css                        */

const PUBLIC_GOOGLE_SITE_VERIFICATION = undefined;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://zhangxiaohh.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  const BASE_URL = "/vento/";
  const {
    title = t("site.title"),
    author = SITE.author,
    profile = SITE.profile,
    description = t("site.desc"),
    ogImage = `/${SITE.ogImage}` ,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.url),
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(ogImage, Astro2.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${socialImageURL}`,
    datePublished: `${pubDatetime?.toISOString()}`,
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: `${author}`,
        ...profile && { url: profile }
      }
    ]
  };
  return renderTemplate(
    _a || (_a = __template(["<html", "", "", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="sitemap"', '><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google JSON-LD Structured data --><script type="application/ld+json">', '</script><!-- Enable RSS feed auto-discovery  --><!-- https://docs.astro.build/en/recipes/rss/#enabling-rss-feed-auto-discovery --><link rel="alternate" type="application/rss+xml"', "", "><!-- Google Font -->", '<meta name="theme-color" content="">', "<!-- <ClientRouter /> --><script", "></script><!-- mouse-firework 粒子爆炸特效 -->", "", "</head> <body data-astro-cid-sckkx6r4> ", " <!-- oneko.js 猫猫跟随鼠标特效 --> <script", ">\n      const onekoScript = document.createElement('script');\n      onekoScript.src = 'https://cdn.jsdelivr.net/gh/adryd325/oneko.js@main/oneko.js';\n      const currentScript = document.currentScript;\n      const catUrl = currentScript.getAttribute('data-neko-cat');\n      onekoScript.setAttribute('data-cat', catUrl);\n      document.body.appendChild(onekoScript);\n    </script> </body> </html> "])),
    addAttribute(`${Astro2.currentLocale ?? DEFAULT_LOCALE}`, "lang"),
    addAttribute(`${scrollSmooth && "scroll-smooth"}`, "class"),
    addAttribute(LOCALE.direction, "dir"),
    addAttribute(`${BASE_URL}favicon.svg`, "href"),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(`${BASE_URL}sitemap-index.xml`, "href"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`,
    modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    unescapeHTML(JSON.stringify(structuredData)),
    addAttribute(t("site.title"), "title"),
    addAttribute(new URL(
      getRelativeLocalePath(Astro2.currentLocale, "rss.xml"),
      Astro2.site
    ), "href"),
    Astro2.currentLocale === "ar" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght={100;200;300;400;500;600;700&display=swap" rel="preload" as="style" onload="this.onload=null; this.rel='stylesheet';" crossorigin>` })}`,
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    PUBLIC_GOOGLE_SITE_VERIFICATION,
    addAttribute(`${BASE_URL}toggle-theme.js`, "src"),
    renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"),
    renderHead(),
    renderSlot($$result, $$slots["default"]),
    addAttribute(`${BASE_URL}oneko.gif`, "data-neko-cat")
  );
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://zhangxiaohh.github.io");
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mx-auto max-w-app", noPadding ? "px-0" : "px-4"], "class:list")}> <hr class="border-border"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Hr.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const IconX = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconX-DK0Dc7zq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />"});

const IconMoon = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconMoon-CRxdR147.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-moon"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\" />"});

const IconSearch = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconSearch-w3diR66o.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-search"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />"});

const IconArchive = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconArchive-Woxh8eou.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-archive"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10\" /><path d=\"M10 12l4 0\" />"});

const IconSunHigh = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconSunHigh-EHu4P2Sl.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-sun-high"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z\" /><path d=\"M6.343 17.657l-1.414 1.414\" /><path d=\"M6.343 6.343l-1.414 -1.414\" /><path d=\"M17.657 6.343l1.414 -1.414\" /><path d=\"M17.657 17.657l1.414 1.414\" /><path d=\"M4 12h-2\" /><path d=\"M12 4v-2\" /><path d=\"M20 12h2\" /><path d=\"M12 20v2\" />"});

const IconMenuDeep = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconMenuDeep-CczWFiGg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 6h16\" /><path d=\"M7 12h13\" /><path d=\"M10 18h10\" />"});

const $$Astro$3 = createAstro("https://zhangxiaohh.github.io");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const isExternalPath = (path) => URL.canParse(path);
  const {
    id,
    href,
    class: className = "",
    ariaLabel,
    title,
    disabled = false
  } = Astro2.props;
  return renderTemplate`${disabled ? renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(["group inline-block", className], "class:list")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<a${addAttribute(id, "id")}${addAttribute(
    isExternalPath(href) ? href : getRelativeLocalePath(Astro2.currentLocale, href),
    "href"
  )}${addAttribute(["group inline-block hover:text-accent", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/LinkButton.astro", void 0);

const $$Astro$2 = createAstro("https://zhangxiaohh.github.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const currentLocale = Astro2.currentLocale;
  const t = translateFor(currentLocale);
  const currentPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isActive = (path) => {
    const currentPathArray = currentPath.split("/").filter((p) => p.trim());
    const pathArray = path.split("/").filter((p) => p.trim());
    return currentPath === path || currentPathArray[0] === pathArray[0];
  };
  return renderTemplate`${maybeRenderHead()}<header> <a id="skip-to-content" href="#main-content" class="absolute start-16 -top-full z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4"> ${t("a11y.skipToContent")} </a> <div id="nav-container" class="mx-auto flex max-w-app flex-col items-center justify-between sm:flex-row"> <div id="top-nav-wrap" class="relative flex w-full items-baseline justify-between bg-background p-4 sm:items-center sm:py-6"> <a${addAttribute(getRelativeLocalePath(currentLocale, "/"), "href")} class="absolute flex items-center gap-2 py-1 text-xl leading-8 font-semibold whitespace-nowrap sm:static sm:my-auto sm:text-2xl sm:leading-none"> <img${addAttribute(`${"/vento/"}avatar.jpg`, "src")} alt="avatar" class="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10" onerror="this.style.display='none'"> <span class="text-base sm:text-lg">${t("site.title")}</span> </a> <nav id="nav-menu" class="flex w-full flex-col items-center sm:ms-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"> <button id="menu-btn" class="focus-outline self-end p-2 sm:hidden"${addAttribute(t("a11y.openMenu"), "aria-label")} aria-expanded="false" aria-controls="menu-items"${addAttribute(t("a11y.openMenu"), "data-open-text")}${addAttribute(t("a11y.closeMenu"), "data-close-text")}> ${renderComponent($$result, "IconX", IconX, { "id": "close-icon", "class": "hidden" })} ${renderComponent($$result, "IconMenuDeep", IconMenuDeep, { "id": "menu-icon" })} </button> <ul id="menu-items"${addAttribute([
    "mt-4 grid w-44 grid-cols-3 place-content-center gap-2",
    "[&>li>a]:block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-center [&>li>a]:font-medium [&>li>a]:hover:text-accent sm:[&>li>a]:px-2 sm:[&>li>a]:py-1",
    "hidden",
    "sm:ms-0 sm:mt-0 sm:flex sm:w-auto sm:gap-x-5 sm:gap-y-0"
  ], "class:list")}> <li class="col-span-3"> <a${addAttribute(getRelativeLocalePath(Astro2.currentLocale, "/posts/"), "href")}${addAttribute({ "active-nav": isActive("/posts") }, "class:list")}> ${t("posts")} </a> </li> <li class="col-span-3"> <a${addAttribute(getRelativeLocalePath(Astro2.currentLocale, "/tags/"), "href")}${addAttribute({ "active-nav": isActive("/tags") }, "class:list")}> ${t("tags")} </a> </li> <li class="col-span-3"> <a${addAttribute(getRelativeLocalePath(Astro2.currentLocale, "/about"), "href")}${addAttribute({ "active-nav": isActive("/about") }, "class:list")}> ${t("about")} </a> </li> ${renderTemplate`<li class="col-span-3"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/archives", "class:list": [
    "focus-outline flex justify-center p-3 sm:p-1",
    {
      "active-nav [&>svg]:stroke-accent": isActive("/archives")
    }
  ], "ariaLabel": t("a11y.archives"), "title": `   ${t("archives")}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconArchive", IconArchive, { "class": "hidden sm:inline-block" })} <span class="sm:sr-only">${t("archives")}</span> ` })} </li>`} <li class="col-span-1 flex items-center justify-center"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/search", "class:list": [
    "focus-outline flex p-3 sm:p-1",
    { "[&>svg]:stroke-accent": isActive("/search") }
  ], "ariaLabel": t("a11y.search"), "title": ` ${t("search")}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconSearch", IconSearch, {})} <span class="sr-only">${t("search")}</span> ` })} </li> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-12 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} </ul> </nav> </div> </div> ${renderComponent($$result, "Hr", $$Hr, {})} </header> ${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Header.astro", void 0);

const IconGitHub = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconGitHub-D4TpU-sh.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-github"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\" />"});

const IconMail = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconMail-BsR8RxJL.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-mail"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /><path d=\"M3 7l9 6l9 -6\" />"});

const IconQQ = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconQQ-DP_0HCrr.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-qq"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M6 9.748a14.716 14.716 0 0 0 11.995 -.052c.275 -9.236 -11.104 -11.256 -11.995 .052\" /><path d=\"M18 10c.984 2.762 1.949 4.765 2 7.153c.014 .688 -.664 1.346 -1.184 .303c-.346 -.696 -.952 -1.181 -1.816 -1.456\" /><path d=\"M17 16c.031 1.831 .147 3.102 -1 4\" /><path d=\"M8 20c-1.099 -.87 -.914 -2.24 -1 -4\" /><path d=\"M6 10c-.783 2.338 -1.742 4.12 -1.968 6.43c-.217 2.227 .716 1.644 1.16 .917c.296 -.487 .898 -.934 1.808 -1.347\" /><path d=\"M15.898 13l-.476 -2\" /><path d=\"M8 20l-1.5 1c-.5 .5 -.5 1 .5 1h10c1 0 1 -.5 .5 -1l-1.5 -1\" /><path d=\"M12.75 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M9.25 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />"});

const IconWechat = createSvgComponent({"meta":{"src":"/vento/astro-assets/IconWechat-XadlAnA5.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-wechat"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5\" /><path d=\"M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233\" /><path d=\"M10 8h.01\" /><path d=\"M7 8h.01\" /><path d=\"M15 14h.01\" /><path d=\"M18 14h.01\" />"});

const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/zhangxiaohh",
    linkTitle: (t) => t("socials.github"),
    icon: IconGitHub
  },
  {
    name: "WeChat",
    copyValue: "vento040624",
    linkTitle: (t) => t("socials.wechat") || "WeChat",
    icon: IconWechat
  },
  {
    name: "QQ",
    copyValue: "210567852",
    linkTitle: (t) => t("socials.qq") || "QQ",
    icon: IconQQ
  },
  {
    name: "Mail",
    copyValue: "210567852@qq.com",
    linkTitle: (t) => t("socials.mail"),
    icon: IconMail
  }
];
const SHARE_LINKS = [
  {
    name: "复制链接",
    href: "javascript:(function(){navigator.clipboard.writeText(window.location.href);alert('链接已复制，粘贴到微信发送给朋友吧！');})();",
    linkTitle: (t) => {
      return "复制链接分享";
    },
    icon: IconWechat
  },
  {
    name: "QQ",
    href: "https://connect.qq.com/widget/shareqq/index.html?url=",
    linkTitle: (t) => {
      return "分享到QQ";
    },
    icon: IconQQ
  },
  {
    name: "邮件",
    href: "mailto:?subject=来看看这篇有趣的文章&body=我发现了一篇很棒的文章，分享给你：",
    linkTitle: (t) => {
      return "通过邮件分享";
    },
    icon: IconMail
  }
];

const $$Astro$1 = createAstro("https://zhangxiaohh.github.io");
const $$Socials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Socials;
  const t = translateFor(Astro2.currentLocale);
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex-wrap justify-center gap-1", { flex: centered }], "class:list")} data-astro-cid-upu6fzxr> ${SOCIALS.map((social) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-upu6fzxr": true }, { "default": async ($$result2) => renderTemplate`${social.href ? renderTemplate`${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": social.href, "class": "p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle(t), "data-astro-cid-upu6fzxr": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110", "data-astro-cid-upu6fzxr": true })} <span class="sr-only" data-astro-cid-upu6fzxr> ${t(`socials.${social.name.toLowerCase()}`)} </span> ` })}` : renderTemplate`<button type="button" class="copy-btn focus-outline relative p-2 hover:rotate-6 sm:p-1 cursor-pointer bg-transparent border-none"${addAttribute(`${social.name}: ${social.copyValue} (\u70B9\u51FB\u590D\u5236)`, "title")}${addAttribute(social.copyValue, "data-copy-value")}${addAttribute(social.name, "data-name")} data-astro-cid-upu6fzxr> ${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110", "data-astro-cid-upu6fzxr": true })} <span class="sr-only" data-astro-cid-upu6fzxr> ${social.name} </span> <span class="copy-tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity pointer-events-none whitespace-nowrap" data-astro-cid-upu6fzxr>
已复制!
</span> </button>`}` })}`)} </div>  ${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Socials.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Socials.astro", void 0);

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const t = translateFor(Astro2.currentLocale);
  const LOCALE = getLocaleInfo(Astro2.currentLocale);
  const currentYear = (/* @__PURE__ */ new Date()).toLocaleDateString(LOCALE.langTag, {
    year: "numeric"
  });
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["w-full", { "mt-auto": !noMarginTop }], "class:list")}> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true })} <div class="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4"> ${renderComponent($$result, "Socials", $$Socials, { "centered": true })} <div class="my-2 flex flex-col items-center whitespace-nowrap sm:flex-row"> <span>${t("footer.text", { year: currentYear })}</span> </div> </div> </footer>`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Footer.astro", void 0);

export { $$Layout as $, SHARE_LINKS as S, $$Header as a, $$LinkButton as b, $$Footer as c, createSvgComponent as d, SOCIALS as e, $$Socials as f, $$Hr as g };
