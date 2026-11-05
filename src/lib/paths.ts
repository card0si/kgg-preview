/** Keep in sync with `basePath` in next.config.ts. */
export const basePath = "/kgg-preview";

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
