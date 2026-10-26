# Hakermany wiki

Public field notes on security, engineering and automation.

Site: https://wiki.hakermany.com/

## Local development

Requires Bun and a supported Node.js version for Astro.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run check:links
```

Articles live in `src/content/docs/`, uploaded images in `public/images/`. Use the edit link on an article to propose a change on GitHub. Merge to `main` publishes through GitHub Pages.

The migration includes current Wiki.js content only. Historical revisions, user accounts, permissions and database dumps are intentionally excluded. Existing incomplete chapters are marked Draft. No portal credentials or login are needed to read this public site.
