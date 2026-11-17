# Kenton Global Group — Website V2

A static site, ready for GitHub Pages: plain HTML, one CSS file, one small JS file and self-hosted fonts. There's no build step.

## Structure

| Page | Path |
|---|---|
| Home | `index.html` |
| AI & Automation | `ai-automation/` |
| Digital Transformation | `digital-transformation/` |
| Forward Engineering | `forward-engineering/` |
| Ventures | `ventures/` |
| About | `about/` |
| Contact | `contact/` |
| Privacy, Terms, 404 | `privacy/`, `terms/`, `404.html` |

Shared files are in `assets/`. Styles are in `assets/css/site.css`, behavior is in `assets/js/site.js`, the Archivo variable font and the Cinzel wordmark font are in `assets/fonts/`, and imagery from V1 is in `assets/img/`.

## Positioning

Kenton Global Group is the umbrella company, positioned as a broad AI and digital transformation firm. Its three areas are AI & Automation, Digital Transformation and Forward Engineering. Ventures is where new brands live. Defense work will go on a separate Kenton Defense site later.

## Offices

The homepage and About page show the Covington, KY headquarters and the Charleston, SC office. No addresses are listed.

The building photos are free stock images from Unsplash. They are free for commercial use and need no credit. They are **not** photos of KGG's actual buildings, so swap in real office photos when you have them:
- `assets/img/office-covington.jpg`: "Modern glass building at dusk with light trails" by Tiomothy Swope (unsplash.com/photos/zwe--GYIZtc)
- `assets/img/office-charleston.jpg`: "Modern office building with glass and brick facade" by Linus Belanger (unsplash.com/photos/z-XlxM2vAPY)

Both photos are cropped to 4:5 and given a light navy color grade to match the site.

## Contrackr logo

The logo files are in `assets/img/contrackr/`:
- `contrackr-logo.svg` for dark backgrounds
- `contrackr-logo-light.svg` for white backgrounds
- `contrackr-icon.svg` as the app icon or favicon

Contrackr has its own brand colors, separate from KGG: Graphite `#0E0F12`, Plate `#1A1C21`, Amber `#FFB224` and Off-white `#F5F4F0`. The mark is a tracking arc with a data feed running through it to a live node. The wordmark is Archivo Bold Expanded, converted to outlines, so it needs no font to display.

## Clients

On the homepage, Steidle Fabricating and Contrackr share one "Clients and ventures" section. The cards flip between each other with tabs, arrow buttons, arrow keys and an 8-second auto-advance that pauses when you hover or focus. Add a card by adding an entry to the list in the section. Steidle also appears on the About page, using its logo (`assets/img/clients/steidle-logo.svg`) and a link to steidlefab.com.

## Design system

- **Palette:** Abyss `#081226` (base), Navy `#102040` (brand), Panel `#0E1C3A`, Steel `#C8D0DC` (secondary text), Ice `#EEF2F7` (primary text), Signal `#6FA8FF` (used only for lines, focus and active states).
- **Type:** Archivo variable throughout. Headlines are set at 112% width and body text at normal width. Cinzel appears only in the KENTON wordmark.
- **Signature element:** the homepage domain selector. Three full-height panels widen on hover or focus. On mobile they stack.
- **Light sections:** long-reading sections use `class="sec light"`, with soft white `#F4F6F8` or white backgrounds, navy text and a deeper blue `#1F5FD1` for accents. They alternate with the dark sections on every page.
- **Mobile:** below 760px, page heroes shrink to fit their content, area cards stack and drop their tag lists, office photos switch to 4:3, the clients/ventures flip becomes a crossfade with the arrow buttons hidden, and the call-to-action buttons go full width.
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
- [ ] **Steidle:** confirm Steidle is fine with being named as a client and with the wording.
- [ ] **Office photos:** replace the stock photos with real photos of your offices when available.
