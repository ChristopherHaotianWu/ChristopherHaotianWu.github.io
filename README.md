# 吴昊天 · Haotian Wu

Personal website at https://christopherhaotianwu.github.io/.

Buildless static HTML, CSS and a small print button script. No package installation, external fonts or backend required.

## Edit

- `index.html`: biography, selected projects, experience, research and contact information.
- `styles.css`: responsive layout and A4 print styles.
- `script.js`: opens the browser's print dialog to print or save as PDF.

Content based on the owner's résumé updated 2026-10-20 and the public CortexCrawl README. Research submission/draft labels are preserved. Review dates and research status when updating the site.

## Preview

Run `python3 -m http.server 8765` in this directory and open http://localhost:8765/.

## Deploy

In repository Settings → Pages, use **Deploy from a branch**, select **master** and **/(root)**. Updates to master automatically publish to GitHub Pages. `.nojekyll` serves files directly without Jekyll.
