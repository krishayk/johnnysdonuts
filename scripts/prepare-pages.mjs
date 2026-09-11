import fs from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist/client');
const base = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
if (base && !/^\/[A-Za-z0-9._/-]+$/.test(base)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be a repository path, for example /johnnys-donuts');
}
const routes = ['', 'our-story', 'menu', 'gallery', 'contact-us'];
for (const route of routes) {
  const file = path.join(output, route ? `${route}.html` : 'index.html');
  if (!fs.existsSync(file)) throw new Error(`Static export is missing ${file}`);
}

// This Vinext release prerenders at the root. Relocate only the generated
// resource URLs after export, leaving external links and page content intact.
function relocate(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { relocate(file); continue; }
    if (!/\.(html|js|css|json|rsc)$/.test(file)) continue;
    let text = fs.readFileSync(file, 'utf8');
    if (base) {
      text = text.replaceAll('/_next/', `${base}/_next/`);
      if (file.endsWith('.css')) text = text.replaceAll('/assets/', `${base}/assets/`);
    }
    fs.writeFileSync(file, text);
  }
}
relocate(output);

// Directory indexes make direct visits and refreshes work on a static host.
for (const route of routes.filter(Boolean)) {
  fs.mkdirSync(path.join(output, route), { recursive: true });
  fs.copyFileSync(path.join(output, `${route}.html`), path.join(output, route, 'index.html'));
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log(`Prepared all five pages for ${base || '/'} on GitHub Pages.`);
