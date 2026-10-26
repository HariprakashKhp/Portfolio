# GitHub and Cloudflare Pages deployment

Prepared for `hariprakash.in` on 2026-10-26. This is a setup guide; no Git repository, Cloudflare project, deployment, DNS change, or live check has been performed by the agent for this update.

## How CI/CD will work

Cloudflare Pages is the build and deployment runner. Connect GitHub once; later branch pushes create previews and pushes/merges to `main` update production. Cloudflare reports deployment status in GitHub. A separate GitHub Actions workflow or deployment API token is not needed for this approach. [Cloudflare Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)

```text
Feature branch push -> Cloudflare build -> Preview URL
Merge into main     -> Cloudflare build -> Production deployment
```

The configured build runs `next build`, including its TypeScript validation, and exports static files. Browser tests, lint, and other verification are not added to automatic deployments; request them separately when wanted. The pipeline builds on the server because building is necessary to deploy the site. No tests or builds were run locally during this preparation task.

## 1. Create and push your GitHub repository

Create an empty repository named `portfolio` (or your preferred name) on GitHub. Leave the automatic README, license, and gitignore options unchecked because the local project already has files.

Run these commands yourself from the repository root, replacing the remote URL with your actual GitHub repository URL:

```powershell
cd D:\Learning\Portfolio
git init
git branch -M main
git add .
git status --short
```

Before committing, review the staged file list. Commit the source, `apps/web/package-lock.json`, `apps/web/.node-version`, the public PDF, and the SEO files. The ignore file excludes dependencies, build output, environment secrets, test artifacts, and local caches. The original root DOCX/PDF files stay local; the PDF under `apps/web/public/resume/` is intentionally tracked and published.

```powershell
git commit -m "feat: prepare portfolio for deployment"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

`git init`, commits, and pushes have not been executed by the agent.

## 2. Connect Cloudflare Pages to GitHub

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Create an application and choose **Pages**, then the option to import/connect an existing Git repository.
3. Authorize the Cloudflare GitHub application for your portfolio repository.
4. Select the repository and start its setup.
5. Use the static Next.js export configuration below. This project does not require a Next.js server or a Worker adapter. [Cloudflare static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

## 3. Set the build configuration

| Setting | Value |
|---|---|
| Project name | Your chosen name, for example `hari-portfolio` |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | `apps/web` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Build system | Current v3 build image |

The output directory is relative to the configured root: use `out`, not `apps/web/out`. Cloudflare installs the project dependencies before running the build. Keep the npm lockfile committed. [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)

The committed `.node-version` selects Node 24. You can also explicitly set `NODE_VERSION=24` in both production and preview build environments. Cloudflare supports this file and environment override. [Build image](https://developers.cloudflare.com/pages/configuration/build-image/)

Set the following build environment values initially:

| Variable | Production | Preview |
|---|---|---|
| `NODE_VERSION` | `24` | `24` |
| `ALLOW_INDEXING` | `false` | `false` |

`ALLOW_INDEXING` is a build-time setting, not a secret. The application defaults to `false` when it is absent. `.env.example` documents the local default; it is not a deployed secret file.

Save the configuration and start the first deployment. Open the provided `pages.dev` URL after it reports success. If it fails, inspect the build logs before changing the framework or adding adapters.

## 4. Use previews for future changes

Enable preview builds for non-production branches in the Pages branch settings. For subsequent edits:

```powershell
git switch -c feature/describe-your-change
# Make your changes.
git add .
git commit -m "feat: describe your change"
git push -u origin feature/describe-your-change
```

Open a pull request into `main`. Use its Cloudflare preview link to review the proposed version. Merge when you want the change published; the production branch builds and deploys automatically. Preview URLs are public unless separately protected with Cloudflare Access. They do not replace the production site. [Preview deployment behavior](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

The preview environment must keep `ALLOW_INDEXING=false`. Cloudflare also applies noindex protection to its preview deployments. Noindex is a search-engine instruction, not a password or access restriction.

## 5. Connect hariprakash.in

1. Add `hariprakash.in` as a website/zone in your Cloudflare account if it is not there already.
2. Review the imported DNS records and preserve any existing email or other records you use.
3. At your domain registrar, replace the domain's authoritative nameservers with the exact nameservers assigned by Cloudflare. The domain can remain registered at its current registrar.
4. Once the zone is active, open the Pages project and its **Custom domains** settings.
5. Add `hariprakash.in` through that flow. Do not only create a manual DNS record without associating the hostname with Pages.
6. Wait for the custom domain and its HTTPS certificate to become active.

Cloudflare Pages requires an apex domain to use a zone in the same Cloudflare account. These are setup instructions; the registrar, current DNS records, and live domain state have not been inspected. [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

For `www.hariprakash.in`, follow Cloudflare's apex-redirect setup after the main domain works:

1. Open Cloudflare **Bulk Redirects** and create a redirect list.
2. Add source `www.hariprakash.in`, target `https://hariprakash.in`, status `301`.
3. Enable query preservation, subpath matching, path-suffix preservation, and include-subdomains as shown in Cloudflare's guide.
4. Create a bulk redirect rule using that list.
5. For the `www` hostname, use the guide's proxied DNS record configuration. If `www` is already configured, reconcile that existing record rather than adding conflicting records.

The desired result is that `/about/` and query strings survive the redirect. Use Cloudflare's documented placeholder `192.0.2.1` only for its proxied redirect-only `www` setup, not for the actual Pages apex hostname. [www redirect instructions](https://developers.cloudflare.com/pages/how-to/www-redirect/)

## 6. Enable production search indexing

After the real domain works and you are ready for search engines:

1. Change **Production** `ALLOW_INDEXING` to `true` in the Pages environment settings.
2. Leave **Preview** `ALLOW_INDEXING=false`.
3. Redeploy production from the latest `main` commit. Changing an environment variable alone does not rewrite already exported HTML.
4. The rebuilt public HTML will permit indexing and following links. Canonical URLs remain on `https://hariprakash.in`.

The added `/robots.txt` allows crawling and points to `/sitemap.xml`. The sitemap lists the six real portfolio routes; no example projects or 404 URLs are included. Update it when adding/removing routes. These files are served from `apps/web/public/` and copied to the static export.

Search indexing means a search engine stores information about a page so it can show it in results. `noindex` asks it to omit the page; `nofollow` asks it not to follow that page's links. The site now permits following links and controls indexing through `ALLOW_INDEXING`. [Google robots metadata](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

A sitemap is a page directory that helps a new site be discovered, particularly before many other sites link to it. It is useful but does not guarantee indexing or rankings. `robots.txt` gives crawling instructions and advertises the sitemap; it is not a way to keep information private. [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview), [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

After launch, you can add the domain to Google Search Console, complete its ownership verification, and submit `https://hariprakash.in/sitemap.xml`.

## 7. Verification when requested

Pending checks are in [ToTest.md](../ToTest.md). When you request verification, include the PDF download, all six page routes and refreshes, the 404 page, the two SEO files, production indexing versus preview noindex, HTTPS, and `www` redirects. No current changes should be described as verified until those checks run.

The existing browser test source has been updated to expect the PDF. It has not been executed for this update. No automatic test workflow has been added to GitHub or Cloudflare.

## 8. Roll back a release

In the Pages project's deployment history, select an earlier successful **production** deployment and choose its rollback action. Preview deployments are not production rollback targets. Then fix the source in Git and push/merge the correction so future deployments include it. [Cloudflare rollback guide](https://developers.cloudflare.com/pages/configuration/rollbacks/)

## Recorded deployment state

- Local launch preparation: implemented, awaiting requested testing.
- Git initialization and first push: to be performed by the owner.
- Cloudflare project/Git integration: not configured by the agent.
- Registrar/nameservers: not supplied or changed.
- Live HTTPS/custom domain: not verified.
- Production indexing: disabled by default until explicitly enabled during launch.
