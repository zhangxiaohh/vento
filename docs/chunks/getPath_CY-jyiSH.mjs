import { B as BLOG_PATH, s as slugifyStr } from './posts_ByIugSTU.mjs';

function getPath(id, filePath, includeBase = true) {
  const pathSegments = filePath?.replace(BLOG_PATH, "").split("/").filter((path) => path !== "").slice(1).filter((path) => !path.startsWith("_")).slice(0, -1).map((segment) => slugifyStr(segment));
  const basePath = includeBase ? "/posts" : "";
  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;
  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }
  return [basePath, ...pathSegments, slug].join("/");
}

export { getPath as g };
