# Design System: Document Printer — Print Studio Workspace

A design system for a document-generation workspace: pick a document type, edit its fields, watch a pixel-perfect A4 sheet update live, print. This file is the single source of truth for generating new screens in Google Stitch. It preserves the app's existing identity (deep navy chrome, calibrated blue accent, paper-on-desk preview) while enforcing a premium, non-generic execution.

## 1. Visual Theme & Atmosphere
A calm, clinical print studio — the feeling of a well-lit prepress room where the paper is the hero. The interface chrome is quiet, cool, and structural; the A4 sheet in the preview is the brightest, most elevated object on screen, sitting on a softly lit desk-like backdrop. Density is "daily-app balanced" (5/10): a working tool, not a marketing page — compact enough for real work, airy enough to never feel like a cockpit. Variance is "offset asymmetric" (5/10): the workspace is a deliberately unequal three-zone split (narrow navy rail → medium control column → wide paper stage), never symmetric halves. Motion is "fluid and restrained" (4/10): soft spring settles, shadow lifts, and a subtle shimmer while the preview re-renders — nothing cinematic, nothing looping aggressively in a tool people use daily.

## 2. Color Palette & Roles
- **Studio Mist** (#F3F5F9) — Primary app background; apply as a very subtle radial wash from #FEFEFE (top-left) to #ECF0F7 (bottom-right), like light falling on a desk
- **Paper White** (#FFFFFF) — The A4 preview sheet and all panel surfaces; the sheet is always the purest, brightest surface on screen
- **Midline Navy** (#0E2854) — Brand chrome: sidebar rail fill (may deepen to a top-to-bottom gradient ending at #153B79), never used for body text
- **Navy Ink** (#11315F) — Text on white when sitting inside navy-branded elements (selected nav pill); headings may use it sparingly for brand moments
- **Charcoal Slate** (#1E293B) — Primary text on light surfaces (never pure black)
- **Muted Steel** (#64748B) — Secondary text: field labels, helper copy, metadata
- **Whisper Border** (#E2E8F0) — 1px structural lines, panel borders, dividers
- **Calibrated Blue** (#1958B7) — The single accent: primary buttons, selected states, focus rings, active template chips. Saturation ~76%, never brighter
- **Blue Wash** (#E4EEFC) — Selected-state fill behind Calibrated Blue text/borders (chips, list rows)
- **Shadow Tint** (rgba(17,32,61,0.06)) — All shadows are tinted to this navy hue, never neutral gray; the A4 sheet gets the deepest lift (rgba(17,32,61,0.12), large and diffused)

Max one accent (Calibrated Blue). The navy rail is brand chrome, not a second accent. No purple, no neon, no gradients on text.

## 3. Typography Rules
- **Display / Headings:** `Geist` — semibold, track-tight (-1%), controlled scale; hierarchy comes from weight and Navy Ink vs Charcoal Slate color shifts, not from huge sizes
- **Body / UI:** `Geist` — regular, relaxed leading (1.5), max 65ch line length; secondary copy in Muted Steel
- **Mono:** `Geist Mono` — document metadata, dates, invoice numbers, amounts, and any tabular figures inside document previews
- **Scale:** App title 1.35rem; panel headings 1rem semibold; body and inputs 0.875rem; helper text 0.8125rem
- **Banned:** Inter, Segoe UI, Arial, Roboto, and all generic serifs. This is a software dashboard — sans-serif pairings exclusively. (Serif may appear *inside* a rendered document template only when the printed document itself calls for it.)

## 4. Component Stylings
* **Sidebar rail:** 255px fixed, Midline Navy vertical gradient (#0E2854 → #153B79), white type. Nav items are full-width left-aligned pills (10px radius, 10px vertical padding). Selected: solid Paper White fill with Navy Ink semibold text. Idle: 10% white fill with 25% white border; hover raises fill to 15%. No icons required — the label list is the navigation.
* **Panel cards (control column):** 16px radius, Paper White, 1px Whisper Border, navy-tinted diffuse shadow (0 6px 18px Shadow Tint), 16–20px internal padding. Cards are used only for the two control groups (Template Version, Document Details) — never nest cards inside cards.
* **Template chips:** 2-column grid, 10px gap, 8px radius, 0.875rem text. Selected: Calibrated Blue border + Blue Wash fill + semibold blue text. Idle: near-white fill (#F8FAFC) with Whisper Border; hover deepens fill one step. Tactile: -1px translate on press.
* **Buttons:** Primary ("Print PDF") is a Calibrated Blue → #0B80AA horizontal gradient (the one permitted gradient), 10px radius, semibold white, 20px horizontal padding, soft tinted shadow; hover lifts shadow slightly, active pushes -1px down. No outer glows. Secondary actions are ghost: transparent fill, Whisper Border, Charcoal Slate text.
* **Inputs / textarea:** Label above in Muted Steel 0.875rem, field below — 8px radius, 1px #CBD5E1 border, 10px padding. Focus: Calibrated Blue border plus a 4px ring at 15% opacity. Error text below the field in a muted red (#B54141). No floating labels, no inside-the-border labels.
* **A4 preview sheet:** Centered paper metaphor — max-width 190mm, Paper White, 6px radius, the deepest shadow in the app (0 16px 30px rgba(17,32,61,0.12)). Everything around it stays visually quieter so the document reads as the hero object.
* **Loading:** Skeletal shimmer blocks matching the A4 sheet's proportions while a template renders — never a circular spinner.
* **Empty state:** A composed panel showing a faint dashed A4 outline with one line of guidance ("This template is static — nothing to edit") — not bare text alone.

## 5. Layout Principles
Three-zone asymmetric workspace on desktop: fixed 255px navy rail → control column constrained to 320–420px → fluid paper stage taking all remaining width. The stage centers the A4 sheet with generous breathing room; the "Live Preview" heading and Print action sit above the sheet, centered to the sheet, not to the viewport. Max content width uncapped — the stage absorbs extra width as whitespace around the paper. CSS Grid throughout, no flexbox percentage math, no overlapping or absolutely-stacked content. Below 1100px the rail becomes a full-width header block and the columns stack (controls above preview). Below 768px everything is a single column: chips collapse to one per row, padding tightens from 24px to 14px, and the sheet scales to full width while preserving A4 aspect. Full-height regions use `min-h-[100dvh]`, never `h-screen`. All tap targets ≥ 44px.

## 6. Motion & Interaction
Spring physics (stiffness 100, damping 20) on everything interactive — no linear easing. Nav pill selection: the white fill settles with a soft spring. Template chip switch: the A4 sheet does a quick 150ms opacity/scale (0.99 → 1) settle to signal re-render, with a skeletal shimmer if rendering takes longer than a beat. Form edits reflect in the preview live on every keystroke — no apply button, ever. List reveals (nav items, chips) cascade in with 30ms stagger on first mount. Hover states animate shadow and fill via transform/opacity only — never top/left/width/height. Perpetual motion is limited to one element: a barely-visible slow breathing of the A4 sheet's shadow (8s cycle), reinforcing "live" without distracting.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in the UI
- No Inter, Segoe UI, Arial, or generic serif fonts in app chrome
- No pure black (#000000) — Charcoal Slate minimum
- No neon glows, no purple/blue AI gradient aesthetic; the single print-button gradient is the only gradient allowed on components
- No second accent color — Calibrated Blue only
- No gradient text, no oversized screaming headlines — this is a working tool
- No 3-equal-cards feature rows, no marketing-page patterns inside the workspace
- No circular spinners — skeletal loaders matching real layout dimensions
- No overlapping elements; every zone owns its own space
- No custom cursors, no "Scroll to explore" filler, no bouncing chevrons
- No generic placeholder content ("John Doe", "Acme Corp") — use realistic Indian business context matching the app's real documents (e.g., "Meridian Diagnostics, Lucknow", "₹48,500.00", "Ref: MD/2026/0142")
- No fake round numbers in sample data
- No AI copy clichés ("Seamless", "Elevate", "Unleash", "Next-Gen")
- No broken Unsplash links — use picsum.photos or inline SVG if imagery is ever needed
