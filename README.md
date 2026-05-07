# Buildathon — React Migration

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
buildathon/
├── index.html                    ← Vite entry (with OG meta, font preconnect)
├── vite.config.js
├── package.json
├── AUDIT.md                      ← Full UI/UX audit document
│
└── src/
    ├── main.jsx                  ← React root
    ├── App.jsx                   ← Layout composition
    │
    ├── styles/
    │   ├── tokens.css            ← Design system (CSS custom properties)
    │   ├── global.css            ← Reset, base, keyframes
    │   └── utils.css             ← Shared classes (.btn, .eyebrow, .container)
    │
    ├── hooks/
    │   ├── useCountdown.js       ← Countdown timer with cleanup
    │   └── useReveal.js          ← IntersectionObserver scroll reveal
    │
    ├── utils/
    │   └── constants.js          ← All data (tracks, FAQ, sponsors, nav)
    │
    └── components/
        ├── layouts/
        │   ├── Navbar/           ← Navbar.jsx + Navbar.module.css
        │   └── Footer/           ← Footer.jsx + Footer.module.css
        │
        └── sections/
            ├── Hero/             ← Hero.jsx + Hero.module.css
            ├── TrustBar/         ← TrustBar.jsx + TrustBar.module.css
            ├── About/            ← About.jsx + About.module.css
            ├── Tracks/           ← Tracks.jsx + Tracks.module.css
            ├── Community/        ← Community.jsx + Community.module.css
            ├── FAQ/              ← FAQ.jsx + FAQ.module.css
            ├── FinalCTA/         ← FinalCTA.jsx + FinalCTA.module.css
            └── RequestAccess/    ← RequestAccess.jsx + RequestAccess.module.css
```

## Key Improvements Over Original HTML

### Architecture
- ✅ Extracted all data to `constants.js` (tracks, FAQ, sponsors, nav links)
- ✅ Removed 3 inline `<style>` blocks from `<body>`
- ✅ Fixed duplicate `id="apply"` — FinalCTA now uses `id="final-cta"`
- ✅ Normalized event date conflict (June 18–19, 2026 everywhere)
- ✅ `useCountdown` hook with proper `setInterval` cleanup on unmount
- ✅ `useReveal` hook encapsulates IntersectionObserver lifecycle

### Design System
- ✅ Single source of truth for tokens in `tokens.css`
- ✅ Eliminated duplicate CSS variable declarations
- ✅ Consistent letter-spacing (`.16em`) across all mono labels
- ✅ Consistent hover system (translateY(-3px)) across all cards
- ✅ Removed duplicate community stats (matched hero stats showcase)
- ✅ 5-column tracks grid eliminates the "orphan" last row issue
- ✅ Sponsor CTA uses `--accent-2` (cyan) instead of rogue `#4F8CFF`

### Accessibility
- ✅ `aria-expanded` on FAQ accordion buttons
- ✅ `aria-controls` + `id` pairing on FAQ
- ✅ `aria-hidden="true"` on all decorative SVGs
- ✅ `aria-label` on nav, social links
- ✅ `autocomplete` attributes on all form fields
- ✅ Client-side form validation with `aria-invalid` + error messages
- ✅ `:focus-visible` styles in global.css
- ✅ `prefers-reduced-motion` respects all transitions + animations
- ✅ `<blockquote>` semantic element for testimonial

### Performance
- ✅ `loading="lazy"` on sponsor logos
- ✅ `color-scheme: dark` meta prevents white flash
- ✅ No runtime CSS-in-JS overhead (CSS Modules)
- ✅ All animations use `transform` + `opacity` only (GPU composited)
- ✅ `font-display: swap` on Google Fonts

### Removed
- ❌ `builder-promise` pill (redundant with hero-sub)
- ❌ Duplicate community stats grid (same data as hero stats)
- ❌ Dead footer links to `#timeline` and `#prizes`
- ❌ Amber gradient from hero background (barely visible, visual noise)
- ❌ Inline `<style>` blocks in body

## Notes for Future Work

1. **Sponsor logos** — drop SVGs into `src/assets/logos/` and import them as modules in `constants.js`
2. **Form backend** — wire `handleSubmit` in RequestAccess to your API endpoint
3. **`/apply` page** — consider moving RequestAccess to its own route for conversion tracking
4. **OG image** — generate a static `og-image.png` and add to `index.html`
5. **Timeline/Prizes sections** — CSS exists, add the section components when content is ready
