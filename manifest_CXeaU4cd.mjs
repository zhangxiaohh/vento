import { N as NOOP_MIDDLEWARE_HEADER, J as decodeKey } from './chunks/astro/server_DNwJ7Yw1.mjs';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/","cacheDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/node_modules/.astro/","outDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/","srcDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/","publicDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/public/","buildClientDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/client/","buildServerDir":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/server/","adapterName":"","routes":[{"file":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://zhangxiaohh.github.io","base":"/vento/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/posts/[...slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/search@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/archives/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/archives/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/content.config.ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/utils/getPath.ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/posts/[...slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...locale]/posts/[...slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...locale]/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/utils/posts.ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...locale]/about@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/utils/about.ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/utils/generateOgImages.ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...locale]/og.png@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/[...locale]/about@_@astro":"pages/_---locale_/about.astro.mjs","\u0000@astro-page:src/pages/[...locale]/archives/index@_@astro":"pages/_---locale_/archives.astro.mjs","\u0000@astro-page:src/pages/[...locale]/og.png@_@ts":"pages/_---locale_/og.png.astro.mjs","\u0000@astro-page:src/pages/[...locale]/posts/[...slug]/index.png@_@ts":"pages/_---locale_/posts/_---slug_/index.png.astro.mjs","\u0000@astro-page:src/pages/[...locale]/posts/[...page]@_@astro":"pages/_---locale_/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...locale]/posts/[...slug]/index@_@astro":"pages/_---locale_/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/[...locale]/rss.xml@_@ts":"pages/_---locale_/rss.xml.astro.mjs","\u0000@astro-page:src/pages/[...locale]/search@_@astro":"pages/_---locale_/search.astro.mjs","\u0000@astro-page:src/pages/[...locale]/tags/[tag]/[...page]@_@astro":"pages/_---locale_/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...locale]/tags/index@_@astro":"pages/_---locale_/tags.astro.mjs","\u0000@astro-page:src/pages/[...locale]/index@_@astro":"pages/_---locale_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CXeaU4cd.mjs","D:\\learningforever\\front-end\\boke\\astro-paper-i18n-main\\Myposts-main\\Myposts-main\\.astro\\content-assets.mjs":"chunks/content-assets_lx7SuiMn.mjs","D:\\learningforever\\front-end\\boke\\astro-paper-i18n-main\\Myposts-main\\Myposts-main\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_c0Tjczop.mjs","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/node_modules/.pnpm/astro@5.16.5_@types+node@25_51f5c2b7d049354f89fc8cc4f4d1bd2c/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CdQW3Hw0.mjs","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.ZsUvMiSU.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DKvanzuZ.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Main.astro?astro&type=script&index=0&lang.ts":"_astro/Main.astro_astro_type_script_index_0_lang.DmwrTf24.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DDVUvIcB.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.C7sIQqY4.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Socials.astro?astro&type=script&index=0&lang.ts":"_astro/Socials.astro_astro_type_script_index_0_lang.wulKxzTC.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/TypeWriter.astro?astro&type=script&index=0&lang.ts":"_astro/TypeWriter.astro_astro_type_script_index_0_lang.D6ons8uF.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/BackButton.astro?astro&type=script&index=0&lang.ts":"_astro/BackButton.astro_astro_type_script_index_0_lang.CWLqCqN9.js","D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/node_modules/.pnpm/@pagefind+default-ui@1.4.0/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.CWLkAfDR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/pages/[...locale]/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.querySelector(\"#main-content\"),e=t?.dataset?.layout,a=t?.dataset?.backurl;e&&sessionStorage.setItem(\"backUrl\",a??\"/\")});"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Main.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.querySelector(\"#main-content\")?.dataset?.backurl;t&&sessionStorage.setItem(\"backUrl\",t)});"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Header.astro?astro&type=script&index=0&lang.ts","function c(){const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu-items\"),n=document.querySelector(\"#menu-icon\"),o=document.querySelector(\"#close-icon\"),u=e?.dataset.openText||\"Open Menu\",a=e?.dataset.closeText||\"Close Menu\";!e||!t||!n||!o||e.addEventListener(\"click\",()=>{const s=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",s?\"false\":\"true\"),e.setAttribute(\"aria-label\",s?u:a),t.classList.toggle(\"hidden\"),n.classList.toggle(\"hidden\"),o.classList.toggle(\"hidden\")})}c();document.addEventListener(\"astro:after-swap\",c);"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.createElement(\"script\");e.src=\"https://www.unpkg.com/mouse-firework@latest/dist/index.umd.js\",e.onload=function(){typeof firework==\"function\"&&firework({excludeElements:[\"a\",\"button\",\"input\",\"textarea\",\"select\"],particles:[{shape:\"circle\",move:\"emit\",easing:\"easeOutExpo\",colors:[\"rgba(255,182,185,.9)\",\"rgba(250,227,217,.9)\",\"rgba(187,222,214,.9)\",\"rgba(138,198,209,.9)\",\"rgba(255,218,185,.9)\",\"rgba(221,160,221,.9)\"],number:30,duration:[1200,1800],shapeOptions:{radius:[8,20]}}]})},document.head.appendChild(e)});"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/Socials.astro?astro&type=script&index=0&lang.ts","function n(){document.querySelectorAll(\".copy-btn\").forEach(c=>{const e=c.cloneNode(!0);c.parentNode?.replaceChild(e,c),e.addEventListener(\"click\",async d=>{d.preventDefault(),d.stopPropagation();const o=e.getAttribute(\"data-copy-value\"),r=e.getAttribute(\"data-name\")||\"\";if(o)try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(o);else{const t=document.createElement(\"textarea\");t.value=o,t.style.position=\"fixed\",t.style.left=\"-9999px\",document.body.appendChild(t),t.select(),document.execCommand(\"copy\"),document.body.removeChild(t)}const a=e.querySelector(\".copy-tooltip\");a&&(a.textContent=`${r} 已复制!`,e.classList.add(\"copied\"),setTimeout(()=>{e.classList.remove(\"copied\")},2e3)),console.log(`已复制 ${r}: ${o}`)}catch(a){console.error(\"复制失败:\",a),alert(`复制失败，请手动复制: ${o}`)}})})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",n):n();document.addEventListener(\"astro:page-load\",n);document.addEventListener(\"astro:after-swap\",n);"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/TypeWriter.astro?astro&type=script&index=0&lang.ts","class a{element;texts;typingSpeed;deleteSpeed;pauseTime;textElement;cursorElement;currentTextIndex=0;currentCharIndex=0;isDeleting=!1;isPaused=!1;constructor(e){this.element=e,this.texts=JSON.parse(e.dataset.texts||\"[]\"),this.typingSpeed=parseInt(e.dataset.typingSpeed||\"100\"),this.deleteSpeed=parseInt(e.dataset.deleteSpeed||\"50\"),this.pauseTime=parseInt(e.dataset.pauseTime||\"2000\"),this.textElement=e.querySelector(\".typewriter-text\"),this.cursorElement=e.querySelector(\".typewriter-cursor\"),this.init()}init(){this.texts.length!==0&&this.type()}type(){const e=this.texts[this.currentTextIndex];if(this.isPaused){setTimeout(()=>{this.isPaused=!1,this.isDeleting=!0,this.type()},this.pauseTime);return}if(this.isDeleting)this.currentCharIndex--,this.textElement.textContent=e.substring(0,this.currentCharIndex),this.currentCharIndex===0&&(this.isDeleting=!1,this.currentTextIndex=(this.currentTextIndex+1)%this.texts.length),setTimeout(()=>this.type(),this.deleteSpeed);else{this.currentCharIndex++;const n=new Intl.Segmenter(\"zh\",{granularity:\"grapheme\"}),s=Array.from(n.segment(e)),r=s.slice(0,this.currentCharIndex).map(h=>h.segment).join(\"\");this.textElement.textContent=r,this.currentCharIndex>=s.length&&(this.isPaused=!0),setTimeout(()=>this.type(),this.typingSpeed)}}}function t(){document.querySelectorAll(\".typewriter\").forEach(e=>{new a(e)})}t();document.addEventListener(\"astro:page-load\",t);document.addEventListener(\"swup:contentReplaced\",t);"],["D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/src/components/BackButton.astro?astro&type=script&index=0&lang.ts","function o(){const t=document.querySelector(\"#back-button\"),e=sessionStorage.getItem(\"backUrl\");e&&t&&(t.href=e)}document.addEventListener(\"astro:page-load\",o);o();"]],"assets":["/vento/file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/404.html","/vento/file:///D:/learningforever/front-end/boke/astro-paper-i18n-main/Myposts-main/Myposts-main/dist/robots.txt"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","zh","ar"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"BHpm5RVS2fkz41epPfVi3r54UJIDHEoyAKeZy00EFZU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
