import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, f as renderScript, g as renderTransition } from '../../../chunks/astro/server_DNwJ7Yw1.mjs';
import { r as renderEntry } from '../../../chunks/_astro_content_8X779-9-.mjs';
import { d as createSvgComponent, S as SHARE_LINKS, b as $$LinkButton, $ as $$Layout, a as $$Header, c as $$Footer } from '../../../chunks/Footer_oSD-fAPa.mjs';
import { $ as $$Tag } from '../../../chunks/Tag_BRHL65X9.mjs';
import { $ as $$Datetime } from '../../../chunks/Datetime_s998FwhP.mjs';
import { a as SITE, t as translateFor, b as getRelativeLocalePath, c as getSlugWithoutLocale, D as DEFAULT_LOCALE, S as SUPPORTED_LOCALES } from '../../../chunks/config_eYlZWC1t.mjs';
import { g as getPath } from '../../../chunks/getPath_CY-jyiSH.mjs';
import { s as slugifyStr, a as getPostsByLocale, g as getPostsGroupedByLocale } from '../../../chunks/posts_ByIugSTU.mjs';
/* empty css                                       */
/* empty css                                       */
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_C1-XN2Ia.mjs';
export { renderers } from '../../../renderers.mjs';

const IconEdit = createSvgComponent({"meta":{"src":"/vento/_astro/IconEdit.C9zdzJLB.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-edit"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\" /><path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z\" /><path d=\"M16 5l3 3\" />"});

const $$Astro$5 = createAstro("https://zhangxiaohh.github.io");
const $$EditPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$EditPost;
  const { hideEditPost, post, class: className = "" } = Astro2.props;
  const href = `${SITE.editPost.url}${post.filePath}`;
  const showEditPost = !hideEditPost && href.trim() !== "";
  const t = translateFor(Astro2.currentLocale);
  return renderTemplate`${showEditPost && renderTemplate`${maybeRenderHead()}<div${addAttribute(["opacity-80", className], "class:list")}><span aria-hidden="true" class="max-sm:hidden">
|
</span><a class="space-x-1.5 hover:opacity-75"${addAttribute(href, "href")} rel="noopener noreferrer" target="_blank">${renderComponent($$result, "IconEdit", IconEdit, { "class": "inline-block size-6" })}<span class="italic max-sm:text-sm sm:inline">${t("suggestChanges")}</span></a></div>`}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/EditPost.astro", void 0);

const $$Astro$4 = createAstro("https://zhangxiaohh.github.io");
const $$ShareLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ShareLinks;
  const URL = Astro2.url;
  const t = translateFor(Astro2.currentLocale);
  return renderTemplate`${SHARE_LINKS.length > 0 && renderTemplate`${maybeRenderHead()}<div class="flex flex-none flex-col items-center justify-center gap-1 md:items-start"><span class="italic">${t("sharePost.desc")}:</span><div class="text-center">${SHARE_LINKS.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": `${social.href + URL}`, "class": "scale-90 p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle(t) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110" })}<span class="sr-only">${social.linkTitle(t)}</span>` })}`)}</div></div>`}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/ShareLinks.astro", void 0);

const IconChevronLeft = createSvgComponent({"meta":{"src":"/vento/_astro/IconChevronLeft.DuweWiRq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M15 6l-6 6l6 6\" />"});

const $$Astro$3 = createAstro("https://zhangxiaohh.github.io");
const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BackButton;
  const currentLocale = Astro2.currentLocale;
  const t = translateFor(currentLocale);
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="mx-auto flex w-full max-w-app items-center justify-start px-2">${renderComponent($$result, "LinkButton", $$LinkButton, { "id": "back-button", "href": "/", "class": "focus-outline mt-8 mb-2 flex hover:text-foreground/75" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block size-6 rtl:rotate-180" })}<span>${t("navigation.goBack")}</span>` })}</div>`}${renderScript($$result, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/BackButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/BackButton.astro", void 0);

const IconArrowNarrowUp = createSvgComponent({"meta":{"src":"/vento/_astro/IconArrowNarrowUp.u0CdFf4k.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 5l0 14\" /><path d=\"M16 9l-4 -4\" /><path d=\"M8 9l4 -4\" />"});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://zhangxiaohh.github.io");
const $$BackToTopButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BackToTopButton;
  const t = translateFor(Astro2.currentLocale);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="btt-btn-container"', '> <button data-button="back-to-top"', '> <span id="progress-indicator" class="absolute inset-0 -z-10 block size-14 scale-110 rounded-full bg-transparent md:hidden md:h-8 md:rounded-md"></span> ', ' <span class="sr-only text-sm group-hover:text-accent md:not-sr-only"> ', " ", ' </span> </button> </div> <script data-astro-rerun>\n  /** Scrolls the document to the top when\n   * the "Back to Top" button is clicked. */\n  function backToTop() {\n    const rootElement = document.documentElement;\n    const btnContainer = document.querySelector("#btt-btn-container");\n    const backToTopBtn = document.querySelector("[data-button=\'back-to-top\']");\n    const progressIndicator = document.querySelector("#progress-indicator");\n\n    if (!rootElement || !btnContainer || !backToTopBtn || !progressIndicator)\n      return;\n\n    // Attach click event handler for back-to-top button\n    backToTopBtn.addEventListener("click", () => {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    });\n\n    // Handle button visibility according to scroll position\n    let lastVisible = null;\n    function handleScroll() {\n      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;\n      const scrollTop = rootElement.scrollTop;\n      const scrollPercent = Math.floor((scrollTop / scrollTotal) * 100);\n\n      progressIndicator.style.setProperty(\n        "background-image",\n        `conic-gradient(var(--accent), var(--accent) ${scrollPercent}%, transparent ${scrollPercent}%)`\n      );\n\n      const isVisible = scrollTop / scrollTotal > 0.3;\n\n      if (isVisible !== lastVisible) {\n        btnContainer.classList.toggle("opacity-100", isVisible);\n        btnContainer.classList.toggle("translate-y-0", isVisible);\n        btnContainer.classList.toggle("opacity-0", !isVisible);\n        btnContainer.classList.toggle("translate-y-14", !isVisible);\n        lastVisible = isVisible;\n      }\n    }\n\n    let ticking = false;\n    document.addEventListener("scroll", () => {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          handleScroll();\n          ticking = false;\n        });\n        ticking = true;\n      }\n    });\n  }\n  backToTop();\n<\/script>'], ["", '<div id="btt-btn-container"', '> <button data-button="back-to-top"', '> <span id="progress-indicator" class="absolute inset-0 -z-10 block size-14 scale-110 rounded-full bg-transparent md:hidden md:h-8 md:rounded-md"></span> ', ' <span class="sr-only text-sm group-hover:text-accent md:not-sr-only"> ', " ", ' </span> </button> </div> <script data-astro-rerun>\n  /** Scrolls the document to the top when\n   * the "Back to Top" button is clicked. */\n  function backToTop() {\n    const rootElement = document.documentElement;\n    const btnContainer = document.querySelector("#btt-btn-container");\n    const backToTopBtn = document.querySelector("[data-button=\'back-to-top\']");\n    const progressIndicator = document.querySelector("#progress-indicator");\n\n    if (!rootElement || !btnContainer || !backToTopBtn || !progressIndicator)\n      return;\n\n    // Attach click event handler for back-to-top button\n    backToTopBtn.addEventListener("click", () => {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    });\n\n    // Handle button visibility according to scroll position\n    let lastVisible = null;\n    function handleScroll() {\n      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;\n      const scrollTop = rootElement.scrollTop;\n      const scrollPercent = Math.floor((scrollTop / scrollTotal) * 100);\n\n      progressIndicator.style.setProperty(\n        "background-image",\n        \\`conic-gradient(var(--accent), var(--accent) \\${scrollPercent}%, transparent \\${scrollPercent}%)\\`\n      );\n\n      const isVisible = scrollTop / scrollTotal > 0.3;\n\n      if (isVisible !== lastVisible) {\n        btnContainer.classList.toggle("opacity-100", isVisible);\n        btnContainer.classList.toggle("translate-y-0", isVisible);\n        btnContainer.classList.toggle("opacity-0", !isVisible);\n        btnContainer.classList.toggle("translate-y-14", !isVisible);\n        lastVisible = isVisible;\n      }\n    }\n\n    let ticking = false;\n    document.addEventListener("scroll", () => {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          handleScroll();\n          ticking = false;\n        });\n        ticking = true;\n      }\n    });\n  }\n  backToTop();\n<\/script>'])), maybeRenderHead(), addAttribute([
    "fixed end-4 bottom-8 z-50",
    "md:sticky md:end-auto md:float-end md:me-1",
    "translate-y-14 opacity-0 transition duration-500"
  ], "class:list"), addAttribute([
    "group relative bg-background px-2 py-1",
    "size-14 rounded-full shadow-xl",
    "md:h-8 md:w-fit md:rounded-md md:shadow-none",
    "md:bg-background/35 md:bg-clip-padding md:backdrop-blur-lg"
  ], "class:list"), renderComponent($$result, "IconChevronLeft", IconChevronLeft, { "class": "inline-block rotate-90 md:hidden" }), renderComponent($$result, "IconArrowNarrowUp", IconArrowNarrowUp, { "class": "inline-block size-4" }), t("navigation.backToTop"));
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/BackToTopButton.astro", void 0);

const IconChevronRight = createSvgComponent({"meta":{"src":"/vento/_astro/IconChevronRight.Cp8tvvdg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 6l6 6l-6 6\" />"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://zhangxiaohh.github.io");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const t = translateFor(Astro2.currentLocale);
  const { post, posts } = Astro2.props;
  const {
    title,
    author,
    description,
    ogImage: initOgImage,
    canonicalURL,
    pubDatetime,
    modDatetime,
    timezone,
    tags,
    hideEditPost
  } = post.data;
  const { Content } = await renderEntry(post);
  let ogImageUrl;
  if (typeof initOgImage === "string") {
    ogImageUrl = initOgImage;
  } else if (initOgImage?.src) {
    ogImageUrl = initOgImage.src;
  }
  if (!ogImageUrl && SITE.dynamicOgImage) {
    ogImageUrl = getRelativeLocalePath(
      Astro2.currentLocale,
      `${getPath(post.id, post.filePath)}/index.png`
    );
  }
  const ogImage = ogImageUrl ? new URL(ogImageUrl, Astro2.url.origin).href : void 0;
  const layoutProps = {
    title: `${title} | ${t("site.title")}`,
    author,
    description,
    pubDatetime,
    modDatetime,
    canonicalURL,
    ogImage,
    scrollSmooth: true
  };
  const allPosts = posts.map(({ data: { title: title2 }, id }) => ({
    slug: id,
    title: title2
  }));
  const currentPostIndex = allPosts.findIndex((a) => a.slug === post.id);
  const prevPost = currentPostIndex !== 0 ? allPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex !== allPosts.length ? allPosts[currentPostIndex + 1] : null;
  return renderTemplate(_a || (_a = __template(["", '  <script data-astro-rerun>\n  /** Create a progress indicator\n   *  at the top */\n  function createProgressBar() {\n    // Create the main container div\n    const progressContainer = document.createElement("div");\n    progressContainer.className =\n      "progress-container fixed top-0 z-10 h-1 w-full bg-background";\n\n    // Create the progress bar div\n    const progressBar = document.createElement("div");\n    progressBar.className = "progress-bar h-1 w-0 bg-accent";\n    progressBar.id = "myBar";\n\n    // Append the progress bar to the progress container\n    progressContainer.appendChild(progressBar);\n\n    // Append the progress container to the document body or any other desired parent element\n    document.body.appendChild(progressContainer);\n  }\n  createProgressBar();\n\n  /** Update the progress bar\n   *  when user scrolls */\n  function updateScrollProgress() {\n    document.addEventListener("scroll", () => {\n      const winScroll =\n        document.body.scrollTop || document.documentElement.scrollTop;\n      const height =\n        document.documentElement.scrollHeight -\n        document.documentElement.clientHeight;\n      const scrolled = (winScroll / height) * 100;\n      if (document) {\n        const myBar = document.getElementById("myBar");\n        if (myBar) {\n          myBar.style.width = scrolled + "%";\n        }\n      }\n    });\n  }\n  updateScrollProgress();\n\n  /** Attaches links to headings in the document,\n   *  allowing sharing of sections easily */\n  function addHeadingLinks() {\n    const headings = Array.from(\n      document.querySelectorAll("h2, h3, h4, h5, h6")\n    );\n    for (const heading of headings) {\n      heading.classList.add("group");\n      const link = document.createElement("a");\n      link.className =\n        "heading-link ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100";\n      link.href = "#" + heading.id;\n\n      const span = document.createElement("span");\n      span.ariaHidden = "true";\n      span.innerText = "#";\n      link.appendChild(span);\n      heading.appendChild(link);\n    }\n  }\n  addHeadingLinks();\n\n  /** Attaches copy buttons to code blocks in the document,\n   * allowing users to copy code easily. */\n  function attachCopyButtons() {\n    const mainContent = document.querySelector("#main-content");\n    const copyButtonLabel = mainContent?.dataset?.copyString ?? "copy";\n\n    const codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    for (const codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.className =\n        "copy-code absolute right-3 -top-3 rounded bg-muted px-2 py-1 text-xs leading-4 text-foreground font-medium";\n      copyButton.innerHTML = copyButtonLabel;\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      // wrap codebock with relative parent element\n      codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n\n    async function copyCode(block, button) {\n      const code = block.querySelector("code");\n      const text = code?.innerText;\n\n      await navigator.clipboard.writeText(text ?? "");\n\n      // visual feedback that task is completed\n      button.innerText = mainContent?.dataset?.copiedString ?? "Copied";\n\n      setTimeout(() => {\n        button.innerText = copyButtonLabel;\n      }, 700);\n    }\n  }\n  attachCopyButtons();\n\n  /* Go to page start after page swap */\n  document.addEventListener("astro:after-swap", () =>\n    window.scrollTo({ left: 0, top: 0, behavior: "instant" })\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "data-astro-cid-vj4tpspi": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-vj4tpspi": true })} ${renderComponent($$result2, "BackButton", $$BackButton, { "data-astro-cid-vj4tpspi": true })} ${maybeRenderHead()}<main id="main-content"${addAttribute([
    "mx-auto w-full max-w-app px-4 pb-12",
    { "mt-8": false }
  ], "class:list")} data-pagefind-body${addAttribute(t("copy"), "data-copy-string")}${addAttribute(t("copied"), "data-copied-string")} data-astro-cid-vj4tpspi> <h1 class="inline-block text-2xl font-bold text-accent sm:text-3xl" data-astro-cid-vj4tpspi${addAttribute(renderTransition($$result2, "fam6wyqg", "", slugifyStr(title)), "data-astro-transition-scope")}> ${title} </h1> <div class="flex items-center gap-4" data-astro-cid-vj4tpspi> ${renderComponent($$result2, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "timezone": timezone, "size": "lg", "class": "my-2", "data-astro-cid-vj4tpspi": true })} ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "max-sm:hidden", "hideEditPost": hideEditPost, "post": post, "data-astro-cid-vj4tpspi": true })} </div> <article id="article" class="mx-auto prose mt-8 max-w-app" data-astro-cid-vj4tpspi> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-vj4tpspi": true })} </article> <hr class="my-8 border-dashed" data-astro-cid-vj4tpspi> ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "sm:hidden", "hideEditPost": hideEditPost, "post": post, "data-astro-cid-vj4tpspi": true })} <ul class="mt-4 mb-8 sm:my-8" data-astro-cid-vj4tpspi> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": slugifyStr(tag), "tagName": tag, "data-astro-cid-vj4tpspi": true })}`)} </ul> ${renderComponent($$result2, "BackToTopButton", $$BackToTopButton, { "data-astro-cid-vj4tpspi": true })} ${renderComponent($$result2, "ShareLinks", $$ShareLinks, { "data-astro-cid-vj4tpspi": true })} <hr class="my-6 border-dashed" data-astro-cid-vj4tpspi> <!-- Previous/Next Post Buttons --> <div data-pagefind-ignore class="grid grid-cols-1 gap-6 sm:grid-cols-2" data-astro-cid-vj4tpspi> ${prevPost && renderTemplate`<a${addAttribute(getRelativeLocalePath(
    Astro2.currentLocale,
    `/posts/${getSlugWithoutLocale(prevPost.slug)}`
  ), "href")} class="flex w-full gap-1 hover:opacity-75" data-astro-cid-vj4tpspi> ${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block flex-none rtl:rotate-180", "data-astro-cid-vj4tpspi": true })} <div data-astro-cid-vj4tpspi> <span data-astro-cid-vj4tpspi>${t("navigation.prevPost")}</span> <div class="text-sm text-accent/85" data-astro-cid-vj4tpspi>${prevPost.title}</div> </div> </a>`} ${nextPost && renderTemplate`<a${addAttribute(getRelativeLocalePath(
    Astro2.currentLocale,
    `/posts/${getSlugWithoutLocale(nextPost.slug)}`
  ), "href")} class="flex w-full justify-end gap-1 text-right hover:opacity-75 sm:col-start-2" data-astro-cid-vj4tpspi> <div data-astro-cid-vj4tpspi> <span data-astro-cid-vj4tpspi>${t("navigation.nextPost")}</span> <div class="text-sm text-accent/85" data-astro-cid-vj4tpspi>${nextPost.title}</div> </div> ${renderComponent($$result2, "IconChevronRight", IconChevronRight, { "class": "inline-block flex-none rtl:rotate-180", "data-astro-cid-vj4tpspi": true })} </a>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-vj4tpspi": true })} ` }));
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/PostDetails.astro", "self");

const $$Astro = createAstro("https://zhangxiaohh.github.io");
async function getStaticPaths() {
  const postsByLocale = await getPostsGroupedByLocale({
    draft: false,
    allowedLocales: SUPPORTED_LOCALES
  });
  const paths = SUPPORTED_LOCALES.flatMap((locale) => {
    const posts = postsByLocale[locale] || [];
    const postResult = posts.map((post) => ({
      params: {
        locale: locale === DEFAULT_LOCALE ? void 0 : locale,
        slug: getPath(post.id, post.filePath, false)
      },
      props: { post }
    }));
    return postResult;
  });
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const { locale = DEFAULT_LOCALE } = Astro2.params;
  const posts = await getPostsByLocale(locale);
  const sortedPosts = getSortedPosts(posts);
  return renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post, "posts": sortedPosts })}`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...slug]/index.astro", void 0);

const $$file = "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...slug]/index.astro";
const $$url = "/vento/[...locale]/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
