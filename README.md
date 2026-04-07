<div align="center">

# 🏷️ trafi.cc

### **You ARE traffic.**

See how much your personal data is worth to Google, Meta, TikTok, and 40+ platforms — based on real published CPM & ARPU rates.

**[🌐 Try it live](https://trafi.cc)** · **[📖 Methodology](https://trafi.cc/methodology)** · **[☕ Support me](https://pay.ziina.com/zeq0)**

---

</div>

## ✨ What is this?

People have no idea how much their data is worth to advertisers. The answer is shockingly low — **$2–50/year** depending on who you are and where you live.

**trafi.cc** turns publicly available ad industry data into a personalized, shareable **digital price tag** that tells you exactly what you're worth.

> 📱 No signup. No data stored. Runs entirely in your browser.

## 🎯 How it works

```
1️⃣  Select your platforms    →  50+ apps across 9 categories
2️⃣  Enter your demographics  →  Age, country, device
3️⃣  Pick your interests      →  Travel, gaming, luxury, etc.
4️⃣  Get your price tag       →  Animated reveal + shareable sticker
```

Every number is calculated from **real ARPU data** pulled from SEC filings (Meta 10-K, Alphabet 10-K, Snap 10-K), eMarketer CPM benchmarks, and IAB reports.

## 🖼️ Features

- 🌍 **50 platforms** across Social, Messaging, Shopping, Streaming, Productivity, Delivery, Dating, Finance, Health
- 🔍 **Search & bulk select** — find platforms fast, select entire categories
- 💰 **Per-platform breakdown** — see exactly which app profits most from you
- 📊 **Data type analysis** — location, browsing, purchase intent, social graph
- 🌎 **Country comparison** — how your value stacks up globally
- 🏷️ **Shareable price tag** — receipt-style sticker, share via Web Share API or download
- 🌗 **Light/dark mode** — system preference + manual toggle
- 📱 **Mobile-first** — designed for sharing on phones
- 🔒 **Zero backend** — all calculations run client-side, nothing leaves your browser

## 🛠️ Tech Stack

| | |
|---|---|
| ⚡ **Framework** | Next.js 15 (App Router) — static export |
| 🎨 **Styling** | Tailwind CSS v4 |
| 🎬 **Animations** | Framer Motion |
| 🏷️ **Sticker** | html2canvas |
| 📝 **Language** | TypeScript |
| 🚀 **Deploy** | Vercel |

## 🏃 Run locally

```bash
git clone https://github.com/zeck00/trafi.cc.git
cd trafi.cc
npm install
npm run dev
```

Open **http://localhost:3000**

## 📁 Project structure

```
src/
├── app/                    # Next.js routes (/, /methodology)
├── components/
│   ├── landing/            # Hero page
│   ├── flow/               # Multi-step form (platforms, demographics, interests)
│   ├── result/             # Result screen (reveal, breakdown, sticker)
│   └── ui/                 # Reusable primitives (chips, toggles, theme)
├── data/                   # Embedded pricing datasets (platforms, countries, interests)
├── hooks/                  # useFlowState, useCountUp, useTheme
├── lib/                    # Calculator engine, animations, sticker generation
└── types/                  # TypeScript interfaces
```

## 📐 Methodology

The calculator uses this formula:

```
Your Value = Base ARPU × Age Multiplier × Device Multiplier × Interest Multiplier × 0.55
```

- **Base ARPU** — from platform earnings reports, by region (NA, EU, APAC, LATAM, MENA, ROW)
- **Age** — 25-34 year olds are worth ~30% more; teens ~40% less
- **Device** — iOS users command ~20% higher CPMs than Android
- **Interests** — luxury (1.6x) and investing (1.5x) are the most valuable verticals
- **0.55x** — realism factor for varying engagement levels

Full details with all sources at **[trafi.cc/methodology](https://trafi.cc/methodology)**

## 💚 Support

If you found this interesting or want to help keep it running:

- ☕ **[Buy me a coffee](https://pay.ziina.com/zeq0)**
- ⭐ **Star this repo**
- 🔗 **Share your price tag**

## 📄 License

MIT

---

<div align="center">

**Built by [Ziad](https://ziad.us)** 🇦🇪

</div>
