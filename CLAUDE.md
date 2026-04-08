# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**trafi.cc** — "You ARE traffic." A static site that shows users how much their personal data is worth to advertisers, based on real published ARPU rates from SEC filings, and generates a shareable price tag sticker.

Domain: trafi.cc

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Build static export (output to /out)
- `npm run lint` — Run ESLint

## Tech Stack

- Next.js 15 (App Router) with `output: 'export'` for static deployment
- Tailwind CSS v4 (CSS-first config in globals.css)
- Framer Motion for animations
- html2canvas for shareable price tag sticker generation
- TypeScript, deployed to Vercel

## Architecture

### Core Flow (single-page, client-side)
`FlowContainer` manages a 4-step state machine with `AnimatePresence` horizontal slide transitions:
1. **StepPlatforms** — Platform selection grid (62 platforms across 10 categories including AI)
2. **StepDemographics** — Age range, country (75+), device (iOS/Android/Desktop)
3. **StepInterests** — Interest pill toggles (15 categories)
4. **ResultScreen** — Animated price tag reveal with per-platform breakdown

### Data Flow
All pricing data is embedded client-side in `src/data/`. The calculator (`src/lib/calculator.ts`) takes `FlowState` and produces `CalculationResult` using:
```
Value = Platform ARPU × Age × Device × Interest × 0.20 (data value fraction)
```
Combined multiplier capped at 1.8x. Platform families (Meta, Alphabet, Amazon) are capped at parent company's reported ARPU × 0.20 to prevent double-counting.

### Key Directories
- `src/components/flow/` — Multi-step form flow components
- `src/components/result/` — Result screen sections (TotalReveal, PlatformGrid, PriceTagSticker, etc.)
- `src/components/ui/` — Reusable UI primitives (PlatformChip, DeviceToggle, InterestTag, Dropdown, ThemeToggle)
- `src/components/landing/` — Hero landing page
- `src/components/layout/` — NavBar (shared across methodology/FAQ)
- `src/data/` — Embedded datasets (platforms, pricing, countries, interests, sources)
- `src/lib/` — Calculator engine, sticker generation, shared animation variants
- `src/hooks/` — useFlowState (form context), useCountUp (animated numbers), useTheme (dark/light)

### Design System
- Light/dark mode via CSS custom properties in :root/.dark, registered in @theme
- Fonts: Space Grotesk (headings), DM Sans (body), JetBrains Mono (prices)
- Dark logos handled via CSS: .logo-invert for black SVGs, .logo-glow for multicolor
- All animations respect `prefers-reduced-motion`
- Price tag sticker uses inline styles only (html2canvas compatibility)

### Pages
- `/` — Landing hero + calculator flow (client-side)
- `/methodology` — Sources, formula, data tiers (server component, SEO)
- `/faq` — 10 questions with JSON-LD FAQPage schema (server component, SEO)
