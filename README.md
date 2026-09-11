# Johnny’s Donuts — GitHub Pages edition

This version publishes all five pages as static files on GitHub Pages. The gallery and testimonial controls remain interactive. Follow Us has been removed, and the footer copyright is 2026.

## Publish for free

1. Extract this ZIP.
2. Create a public GitHub repository with a main branch. Any repository name works.
3. Upload the contents of this folder to the repository root. The root must contain package.json, app/, public/, and .github/workflows/deploy.yml. Upload the extracted files, not the ZIP or an extra enclosing folder. Include hidden folders; on a Mac, Command + Shift + Period shows them. GitHub Desktop is an alternative for uploading the complete folder.
4. In the repository, open Settings → Pages. Under Build and deployment, choose GitHub Actions as the source.
5. Open Actions → Publish GitHub Pages → Run workflow → Run workflow. If the workflow already ran successfully after upload, no rerun is needed.
6. When the workflow succeeds, open the site link shown in the deployment or Settings → Pages.

The workflow builds the site on GitHub and publishes it automatically on future pushes to main. It detects the repository URL, including a project subfolder or a custom domain. No API key or hosting token is needed. If the first run happened before Pages was enabled, rerun it after step 4.

Free GitHub Pages uses a public repository. Hosting is free within GitHub’s usage limits. A custom domain is optional and is purchased separately.

## Preview or build on your computer

Use Node.js 22.13 or newer:

```sh
npm ci
npm run dev
```

For a static build at the root of a domain:

```sh
npm run build
```

For a project named johnnys-donuts (macOS/Linux):

```sh
NEXT_PUBLIC_BASE_PATH=/johnnys-donuts npm run build
```

PowerShell equivalent:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/johnnys-donuts"
npm run build
```

Only dist/client is the deployable static website. Do not publish dist/server or node_modules. Serve the output over HTTP rather than double-clicking the HTML files.

## Editing

- Page content: app/
- Shared header and footer: app/layout.tsx
- Styling: app/globals.css and app/original-fonts.css
- Gallery: app/gallery/gallery.tsx
- Testimonials: app/reviews.tsx
- Repository-aware links: lib/site-path.ts
- Deployment workflow: .github/workflows/deploy.yml

The export uses normal page links, so direct navigation and refreshes work without a server. Use sitePath() for new internal links and public images. The build checks that all five pages were exported and creates directory indexes. The image and font assets are bundled; the map and external social links still require internet access.

This is a proof of concept, without Wix administration or analytics. The original server-oriented dependencies remain in the lockfile for reproducibility, but the GitHub Pages build does not load Cloudflare or Sites plugins and deploys no backend.

## Reference

GitHub’s Pages workflow documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
