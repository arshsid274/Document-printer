# Current UI Extraction — Document Printer

Faithful snapshot of the existing app UI (extracted from `app/`, `components/`, `tailwind.config.js`). Use this as the "what exists today" reference; `DESIGN.md` is the upgraded system to feed Google Stitch.

## App Purpose
Generate print-ready A4 business documents with a live preview. User picks a document type, picks a template version, edits fields in a form, and prints/saves a pixel-perfect A4 PDF.

## Screen Map (single-page app, one workspace screen)

```
┌──────────────┬───────────────────────┬──────────────────────────────┐
│  SIDEBAR     │  CONTROL COLUMN       │  PREVIEW COLUMN              │
│  fixed       │  320–420px            │  fluid                       │
│  255px       │                       │                              │
│              │  ┌─ Template Version─┐│   "Live Preview"             │
│  Document    │  │ 2-col chip grid  ││   "A4 layout with print-     │
│  Printer     │  └──────────────────┘│    ready formatting"         │
│  "Choose a   │  ┌─ Document Details┐│                              │
│  document    │  │ label-above      ││   [ Print PDF ] (gradient)   │
│  type"       │  │ inputs, stacked  ││   ┌────────────────────┐     │
│              │  └──────────────────┘│   │  A4 sheet (190mm)  │     │
│  10 nav      │                       │   │  white, shadowed   │     │
│  buttons     │                       │   └────────────────────┘     │
└──────────────┴───────────────────────┴──────────────────────────────┘
```

- **≤1100px:** sidebar becomes static full-width block on top; columns stack.
- **≤700px:** padding tightens (24px → 14px); template chips go single-column; A4 sheet goes full-width.

## Extracted Color Values

| Role | Value | Where |
|---|---|---|
| Sidebar gradient top | `#0e2854` | `Sidebar.tsx` navy start |
| Sidebar gradient bottom | `#153b79` | navy end |
| Sidebar selected text | `#11315f` | selected nav button (white pill) |
| Accent blue | `#1958b7` | selected template chip, input focus, print button |
| Accent teal (gradient end) | `#0b80aa` | print button gradient end |
| Selected chip fill | `#e4eefc` | template selector active state |
| Page background | radial gradient `#fefefe → #f3f5f9 → #ecf0f7` | `globals.css` body |
| Card border | slate-200 `#e2e8f0` | all panels |
| Primary text | slate-800 `#1e293b` / slate-900 headings | global |
| Secondary text | slate-500/600 | helper copy, labels |
| Card shadow | `0 6px 18px rgba(17,32,61,0.06)` | panels |
| A4 sheet shadow | `0 16px 30px rgba(17,32,61,0.12)` | preview paper |

## Extracted Typography
- Font stack: `"Segoe UI", Arial, sans-serif` (system default — upgrade candidate).
- App title: 1.35rem, tracking +0.2px, white on navy.
- Section headings: base size, semibold, slate-900 ("Template Version", "Document Details").
- Preview heading: xl semibold + sm slate-500 subtitle.
- Form labels: sm, slate-600, positioned above inputs.

## Component Inventory

**Sidebar nav button** — rounded 10px, left-aligned text, `px-3 py-2.5`.
Selected: solid white fill, navy text, semibold. Idle: `white/10` fill, `white/25` border, hover `white/15`.

**Template chip** — rounded 8px, sm text, 2-column grid, gap 10px.
Selected: `#1958b7` border + `#e4eefc` fill + semibold blue text. Idle: slate-50 fill, slate-200 border, hover slate-100.

**Panel card** — rounded 16px (`rounded-2xl`), white, slate-200 border, soft navy-tinted shadow, 16px padding.

**Text input / textarea** — rounded 8px, slate-300 border, `px-2.5 py-2.5`. Focus: `#1958b7` border + 4px ring at 15% opacity. Textarea resizes vertically, 3 rows.

**Print PDF button** — horizontal gradient `#1958b7 → #0b80aa`, rounded 10px, `px-5 py-2.5`, semibold white, small shadow, hover opacity 90%.

**A4 preview sheet** — max-width 190mm, white, rounded-md, heavy soft shadow, centered. Print CSS hides all `.no-print` chrome and outputs exact A4 at 210mm.

**Empty state** — plain panel card with text: "This template is static and has no editable form fields."

## Document Types (sidebar nav content)
Offer Letter · Relieving Letter · Salary Slip · Bank Statement · Roles & Responsibility · Contract · Bill · Ultrasound Report · Prescription · Microsoft Sales Chat

Some documents have multiple template versions (e.g., Salary Slip: Template 1, Template 2, Batch Slips (9 Months)).

## Behaviors Worth Keeping
- All form state, template selection, and active document persist to `localStorage`.
- Live preview updates on every keystroke — no "apply" button.
- Print pipeline is exact-color A4 with zero page margins; screen chrome carries `.no-print`.
