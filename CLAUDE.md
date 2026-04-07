# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**trafi.cc** — "You ARE traffic." A viral static site that shows users how much their personal data is worth to advertisers, based on real published CPM/ARPU rates, and generates a shareable price tag sticker.

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
1. **StepPlatforms** — Platform selection grid (~40 platforms across 9 categories)
2. **StepDemographics** — Age range, country, device (iOS/Android/Desktop)
3. **StepInterests** — Interest pill toggles (~15 categories)
4. **ResultScreen** — Animated price tag reveal with per-platform breakdown

### Data Flow
All pricing data is embedded client-side in `src/data/`. The calculator (`src/lib/calculator.ts`) takes `FlowState` and produces `CalculationResult` using: `baseARPU[region] × ageMult × deviceMult × interestMult × 0.55`.

### Key Directories
- `src/components/flow/` — Multi-step form flow components
- `src/components/result/` — Result screen sections (TotalReveal, PlatformGrid, PriceTagSticker, etc.)
- `src/components/ui/` — Reusable UI primitives (PlatformChip, DeviceToggle, InterestTag)
- `src/data/` — Embedded datasets (platforms, pricing, countries, interests)
- `src/lib/` — Calculator engine, sticker generation, shared animation variants
- `src/hooks/` — useFlowState (form context), useCountUp (animated numbers)

### Design System
- Dark OLED background (#0A0A0F) + exaggerated minimalism
- Fonts: Space Grotesk (headings), DM Sans (body), JetBrains Mono (prices)
- Colors defined as CSS custom properties in globals.css via Tailwind @theme
- All animations respect `prefers-reduced-motion`
- Price tag sticker uses inline styles only (html2canvas compatibility)

### SEO Page
`/methodology` is a server component with generateMetadata, JSON-LD structured data, and source citations. Everything else is client-side.
