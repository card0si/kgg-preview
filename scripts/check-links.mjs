import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "out");
const base = "/kgg-preview";

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else if (name.endsWith(".html")) files.push(path);
  }
  return files;
}

function resolveHref(fromFile, href) {
  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
  const bare = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  if (!bare || bare.startsWith("mailto:") || bare.startsWith("tel:")) {
    return { file: fromFile, hash };
  }
  let urlPath = bare.split("?")[0];
  if (!urlPath.startsWith("/")) {
    const pagePath = fromFile.slice(root.length).replace(/\\/g, "/").replace(/index\.html$/, "");
    urlPath = new URL(urlPath, `http://local${base}${pagePath}`).pathname;
  }
  if (!urlPath.startsWith(base)) return { external: urlPath };
  let rel = decodeURIComponent(urlPath.slice(base.length));
  if (rel === "" || rel === "/") rel = "/index.html";
  else if (rel.endsWith("/")) rel = `${rel}index.html`;
  return { file: join(root, rel), hash };
}

const htmlFiles = walk(root);
const ids = new Map();
function idsFor(file) {
  if (!ids.has(file)) {
    const html = readFileSync(file, "utf8");
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])));
  }
  return ids.get(file);
}

const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (href.startsWith("data:") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    const target = resolveHref(file, href);
    if (target.external) {
      broken.push(`${file} -> external ${target.external}`);
      continue;
    }
    try {
      statSync(target.file);
    } catch {
      broken.push(`${file} -> missing ${href}`);
      continue;
    }
    if (target.hash && !idsFor(target.file).has(target.hash)) {
      broken.push(`${file} -> missing #${target.hash} in ${target.file}`);
    }
  }
}

if (broken.length) {
  console.error(broken.join("\n"));
  console.error(`\n${broken.length} broken link(s)`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} pages, 0 broken links`);
