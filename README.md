# Kenton Global Group — Website V2

A static site, ready for GitHub Pages: plain HTML, one CSS file, one small JS file and self-hosted fonts. There's no build step.

## Structure

| Page | Path |
|---|---|
| Home | `index.html` |
| Defense Solutions | `defense/` |
| Digital & AI Transformation | `digital-ai/` |
| Forward Engineering | `forward-engineering/` |
| Ventures | `ventures/` |
| About | `about/` |
| Contact | `contact/` |
| Privacy, Terms, 404 | `privacy/`, `terms/`, `404.html` |

Shared files are in `assets/`. Styles are in `assets/css/site.css`, behavior is in `assets/js/site.js`, the Archivo variable font and the Cinzel wordmark font are in `assets/fonts/`, and imagery from V1 is in `assets/img/`.

## Design system

- **Palette:** Abyss `#081226` (base), Navy `#102040` (brand), Panel `#0E1C3A`, Steel `#C8D0DC` (secondary text), Ice `#EEF2F7` (primary text), Signal `#6FA8FF` (used only for lines, focus and active states).
- **Type:** Archivo variable throughout. Headlines are set at 112% width and body text at normal width. Cinzel appears only in the KENTON wordmark.
- **Signature element:** the homepage domain selector. Three full-height panels widen on hover or focus. On mobile they stack.
- **Details:** buttons have chamfered corners. Motion is limited to the hero load sequence and user-triggered changes, and it respects `prefers-reduced-motion`.

## Publish

1. Go to Settings → Pages → Deploy from branch → `main` / root.
2. The site will be live at `https://card0si.github.io/kgg-v2/`.
3. For a custom domain, add a `CNAME` file. `404.html` sets its own base path, so it works on both.

## Before going public

- [ ] **Contact form:** it only shows a confirmation message right now and doesn't send anything. Add a form service such as Formspree, Basin or Netlify Forms, then set `action="..."` and `method="POST"` on the `<form>`.
- [ ] **Indexing:** every page has `noindex,nofollow`. Remove it at launch.
- [ ] **Confirm copy:** engagement lengths (Forward Engineering table), the 30-minute call, and "Kenton Global Group LLC" in the footer.
- [ ] **Contact details:** an email or phone number could be added to the contact page and footer. V1 only had placeholders, so none are shown.
- [ ] **Legal review:** Privacy and Terms are marked as drafts.
- [ ] **Ventures:** Contrackr is listed as "In development". Add new ventures by copying the `.venture` block in `ventures/index.html`.
- [ ] **Imagery:** the photos are reused from V1. Real defense imagery (your own product or field photos) would make the Defense page stronger.
