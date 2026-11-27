# Kenton Global Group — Website V2

A static site, ready for GitHub Pages: plain HTML, one CSS file, one small JS file and self-hosted fonts. There's no build step.

## Structure

| Page | Path |
|---|---|
| Home | `index.html` |
| Web Development | `web-development/` |
| Pricing | `pricing/` |
| AI & Automation | `ai-automation/` |
| Digital Transformation | `digital-transformation/` |
| Forward Engineering | `forward-engineering/` |
| Ventures | `ventures/` |
| About | `about/` |
| Contact | `contact/` |
| Thanks (form success, noindex) | `thanks/` |
| Privacy, Terms, 404 | `privacy/`, `terms/`, `404.html` |

Shared files are in `assets/`. Styles are in `assets/css/site.css`, behavior is in `assets/js/site.js`, and fonts are in `assets/fonts/`. `robots.txt` and `sitemap.xml` are at the root. Internal links use directory URLs (`../pricing/`), which match the canonical URLs and work on both the custom domain and a github.io preview.

When you change `site.css` or `site.js`, bump the `?v=` string on every page (currently `v=v2batch1`).

## Positioning

The website is the front door. The lead offer is a new professional website for small and local businesses in Northern Kentucky and Cincinnati. The upsells, in order, are local SEO and Google Business Profile setup, monthly care plans, the AI phone receptionist, automation and AI consulting, and digital transformation. The Home, Web Development and Pricing pages carry this path, and each service page links back to Web Development and Pricing. Forward Engineering and Ventures stay as they were. Forward Engineering is in the footer and the home cards but not the header nav, which keeps the nav on one line.

Prices on `pricing/` are "starting at" prices. The private reasoning and sources are kept outside the repo.

## Images

All photos are real stock photography from Pexels and Unsplash, free for commercial use with no credit required. Each large photo comes in two widths, `name.jpg` (1600px) and `name-800.jpg`, used with `srcset`. The AI-rendered images from V1 have been removed.

## Offices

The About page shows the Covington, KY headquarters and the Charleston, SC office. No addresses are listed anywhere on the site.

The building photos are free stock images from Unsplash. They are free for commercial use and need no credit. They are **not** photos of KGG's actual buildings, so swap in real office photos when you have them:
- `assets/img/office-covington.jpg`: "Modern glass building at dusk with light trails" by Tiomothy Swope (unsplash.com/photos/zwe--GYIZtc)
- `assets/img/office-charleston.jpg`: "Modern office building with glass and brick facade" by Linus Belanger (unsplash.com/photos/z-XlxM2vAPY)

Both photos are shown at 3:2 on desktop and 4:5 on mobile, with a light navy color grade to match the site.

## Contrackr logo

The logo files are in `assets/img/contrackr/`:
- `contrackr-logo.svg` for dark backgrounds
- `contrackr-logo-light.svg` for white backgrounds
- `contrackr-icon.svg` as the app icon or favicon

Contrackr has its own brand colors, separate from KGG: Graphite `#0E0F12`, Plate `#1A1C21`, Amber `#FFB224` and Off-white `#F5F4F0`. The mark is a tracking arc with a data feed running through it to a live node. The wordmark is Archivo Bold Expanded, converted to outlines, so it needs no font to display.

## Clients

Steidle Fabricating (https://steidlefabricating.com) is a named client, with permission. It appears as a book on the Home bookshelf ("Sites we've built"), on About, and as the client project on Web Development. There is no flip card any more. To add a card, copy a `.venture` block inside `.stack`.

## Design system

- **Palette:** Abyss `#081226` (base), Navy `#102040` (brand), Panel `#0E1C3A`, Steel `#C8D0DC` (secondary text), Ice `#EEF2F7` (primary text), Signal `#6FA8FF` (used only for lines, focus and active states).
- **Type:** Archivo variable throughout. Headlines are set at 112% width and body text at normal width. Cinzel appears only in the KENTON wordmark.
- **Signature element:** the homepage domain selector. Three full-height panels widen on hover or focus. On mobile they stack.
- **Light sections:** long-reading sections use `class="sec light"`, with soft white `#F4F6F8` or white backgrounds, navy text and a deeper blue `#1F5FD1` for accents. They alternate with the dark sections on every page.
- **Mobile:** below 760px, page heroes shrink to fit their content and get a stronger overlay for readability, area cards stack and drop their tag lists, office photos are 4:5 side by side (3:2 on desktop), pricing cards stack, and call-to-action buttons go full width. The burger menu shows below 1140px and includes a Call button.
- **Pricing cards:** `.plans` / `.plan` (with `.pop` and `.badge` for the visual "Most popular" pick), `.addons`, and `.checks` for tick lists. Mid-page call strips use `.sec.strip`.
- **Details:** buttons have chamfered corners. Motion is limited to the hero load sequence and user-triggered changes, and it respects `prefers-reduced-motion`.

## Publish

The live site is the `v2` branch, published with GitHub Pages on the custom domain in `CNAME`. `404.html` sets its own base path, so it works on both the custom domain and a github.io preview. In Settings → Pages, confirm **Enforce HTTPS** is on.

## Owner setup still needed (needs sign-in or an account)

- [ ] **Web3Forms (contact form):** create an account and an access key for contact@kentonglobalgroup.com, and restrict the key to the domain. Paste the key into `WEB3FORMS_KEY` in `assets/js/site.js`. Until then, the form opens the visitor's email app with the message filled in and never claims it was sent. Once the key is set, only a confirmed success redirects to `/thanks/`. Then update the Privacy page to name Web3Forms, and send one real test message.
- [ ] **Google Analytics 4:** create a GA4 property and put the measurement ID in `GA_ID` in `assets/js/site.js`. It does nothing while the value is `G-XXXXXXX`. Visits to `/thanks/` fire a `generate_lead` event. Before turning it on, update the Cookies section of the Privacy page.
- [ ] **Google Search Console:** verify the domain with a DNS TXT record, submit `https://kentonglobalgroup.com/sitemap.xml`, and request indexing of the 9 public pages. Do the same in Bing Webmaster Tools.
- [ ] **Google Business Profile:** set it up as a service-area business (Northern Kentucky and Cincinnati area) with the address hidden, phone (859) 888-1429, and the website URL.
- [ ] **Lighthouse:** after rollout, run Lighthouse on mobile for every public page.

## Still open

- [ ] **Legal review:** Privacy and Terms are marked as drafts and stay `noindex` until a lawyer signs off.
- [ ] **Office photos:** replace the stock photos with real photos of your offices when available.
- [ ] **Mailing address:** none appears on the site. A real address (a PO box is fine) is needed before any marketing email goes out (CAN-SPAM).
- [ ] **Social links and hours:** add them to the site and to the schema (`sameAs`) once confirmed.
- [ ] **AI readiness checklist funnel (C35-C37):** waiting on the checklist itself.
- [ ] **Ventures:** add new ventures by copying the `.venture` block in `ventures/index.html`.
