# Reference brief

Kenton Global Group should read as a serious technology firm, not a brochure from another decade. The page is near-black, the type is large and quiet, and the only color is the navy-steel family in `src/theme/tokens.css` and `src/theme/tokens.json`.

## What we take from each reference

**Palantir.** The tone is stark. The canvas is `#0A0B0D`, type is light on dark, and sections are separated by hairline rules instead of illustrated banners. Nothing decorative competes with the sentence.

**Vercel.** The system is monochrome and gridded. A 12-column measure (`--layout-max: 1200px`) carries every page. Borders are `#23272E` and `#323843`. Icons are Lucide, one weight, no illustration.

**Stripe.** Headings and interface type are Inter, with tight tracking and sentence case. The hero is a heavy weight. Motion is a short shift of a few pixels and it turns off under `prefers-reduced-motion`. One linear gradient, navy to blue to steel (`--gradient-accent`), is used as a thin rule and as the score-band track. The glow token is not part of the theme.

## How to swap the brand later

Change colors, type sizes, spacing, and the gradient in the two token files only. The header and footer use `public/logo/kgg-logo-white.svg` on dark surfaces. Light, dark, and black wordmarks sit beside it for a later swap. `kgg-monogram.svg` is not in the build. Backgrounds are the compressed WebP files `bg-hero-glow`, `bg-contours`, and `bg-network`, veiled so they stay behind type. `bg-slabs` is not used.
