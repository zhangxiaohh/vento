import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, s as spreadAttributes, b as renderTemplate } from './astro/server-DNwJ7Yw1.js';
import { s as slugifyStr } from './posts-CYQH2vM_.js';
import { g as getPath } from './getPath-DSoEEccA.js';
import { $ as $$Datetime } from './Datetime-gFoQ4aMb.js';
import { b as getRelativeLocalePath } from './config-CoUBcFaH.js';

const $$Astro = createAstro("https://zhangxiaohh.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { variant = "h2", data, id, filePath } = Astro2.props;
  const { title, description, pubDatetime, modDatetime, timezone } = data;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    class: "text-lg font-medium decoration-dashed hover:underline"
  };
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<li class="my-6"> <a${addAttribute(getRelativeLocalePath(currentLocale, getPath(id, filePath)), "href")} class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"> ${variant === "h2" ? renderTemplate`<h2${spreadAttributes(headerProps)}>${title}</h2>` : renderTemplate`<h3${spreadAttributes(headerProps)}>${title}</h3>`} </a> ${renderComponent($$result, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "timezone": timezone })} <p>${description}</p> </li>`;
}, "D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Card.astro", void 0);

export { $$Card as $ };
