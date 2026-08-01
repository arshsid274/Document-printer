# Google Stitch Prompts — Document Printer

Copy-paste prompts for [labs.google/stitch](https://labs.google/stitch). Workflow:

1. Create a new Stitch project ("Document Printer", web).
2. Paste the full contents of `DESIGN.md` as the design system / first instruction so every screen inherits it.
3. Then generate screens one at a time with the prompts below.

---

## Screen 1 — Main Workspace (the core screen)

> Design the main workspace screen for "Document Printer", a web tool that generates print-ready A4 business documents with a live preview. Desktop, 1440px. Three-zone asymmetric layout: a fixed 255px left sidebar rail in deep navy (#0E2854 to #153B79 vertical gradient) titled "Document Printer" with subtitle "Choose a document type" and a vertical list of 10 nav pills: Offer Letter, Relieving Letter, Salary Slip, Bank Statement, Roles & Responsibility, Contract, Bill, Ultrasound Report, Prescription, Microsoft Sales Chat — "Salary Slip" is selected as a solid white pill with navy text. Middle control column (about 380px) on a soft mist background with two white cards: "Template Version" containing a 2-column grid of selectable chips (Template 1 selected in calibrated blue #1958B7 with pale blue fill #E4EEFC; Template 2 and "Batch Slips (9 Months)" idle), and "Document Details" containing stacked labeled text fields (Employee Name, Designation, Month, Basic Pay, HRA, Deductions) with labels above inputs in muted steel. Right zone is the paper stage: centered heading "Live Preview" with subtitle "A4 layout with print-ready formatting", a blue gradient "Print PDF" button (#1958B7 to #0B80AA), and below it a large white A4 sheet with a deep soft navy-tinted shadow showing a realistic salary slip document (company header, employee table, earnings/deductions columns, net pay in mono digits, e.g. ₹48,500.00). The A4 sheet must be the brightest, most elevated object on screen.

## Screen 2 — Mobile Workspace (stacked)

> Design the mobile version (390px wide) of the Document Printer workspace. Single column, stacked top to bottom: a compact navy header block (#0E2854) with the app title "Document Printer" and a horizontally scrollable row of document-type pills (Salary Slip selected as white pill), then the "Template Version" card with chips one per row, then the "Document Details" card with stacked labeled inputs, then the "Print PDF" gradient button full-width, then the A4 preview sheet scaled to full width keeping A4 aspect ratio with its deep soft shadow. Tap targets at least 44px. Padding 14px. No horizontal overflow.

## Screen 3 — Template Gallery (new idea screen)

> Design a "Choose a template" gallery screen for Document Printer, following the same navy rail + light stage layout. The stage shows a heading "Salary Slip templates" with a short muted subtitle, and an asymmetric 2-column zig-zag grid of template preview cards — each card is a miniature A4 thumbnail of the actual document (rendered realistically, not a placeholder icon), a template name, a small mono metadata line (e.g. "A4 · 1 page"), and the selected card carries a calibrated blue border with pale blue wash. One card labeled "Batch Slips (9 Months)" shows a stacked multi-page thumbnail. A quiet ghost button "Use this template" appears on the selected card only.

## Screen 4 — Document Type Dashboard (new idea screen)

> Design a landing dashboard for Document Printer shown after opening the app: the navy rail on the left, and the stage showing "Your documents" with a grid of recent document cards — each card shows a small A4 thumbnail, document type (e.g. Ultrasound Report), a mono timestamp (e.g. 27 Jul 2026, 04:23), and a subtle "Continue editing" affordance. Above the grid, a compact row of quick-start tiles for the most-used types (Salary Slip, Bill, Prescription, Ultrasound Report) using the blue wash selected style. Keep density balanced — a working tool, not a marketing page.

## Screen 5 — Print Flow / Export State

> Design the print-export state of the Document Printer workspace: the A4 sheet is centered and slightly enlarged, chrome around it dimmed and quieter, with a compact export panel to the right of the sheet offering paper size "A4", margins "None", color "Exact", copies stepper, and a primary gradient "Print PDF" button with a ghost "Save as PDF" secondary. Show a thin skeletal shimmer bar under the sheet indicating the document is rendering. No spinners.

---

## Using the Stitch MCP instead (optional)

If you drive Stitch from Claude Code via the Stitch MCP that's already connected, the flow is: `create_project` → `upload_design_md` (point it at this folder's `DESIGN.md`) → `create_design_system_from_design_md` → `generate_screen_from_text` with each prompt above.
