# ⚡ Devorica — Flagship Digital Product Studio & Web Platform

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=for-the-badge)](https://lenis.darkroom.engineering/)

> High-velocity autonomous product studio building enterprise-grade digital platforms, SaaS MVPs, and AI-driven web systems.

---

## 🌟 Key Architecture & Highlights

- **Ultra-Fluid Motion & Physics**: Powered by Lenis smooth scrolling (`lerp: 0.1`, `wheelMultiplier: 0.8`) and custom `cubic-bezier(0.22, 1, 0.36, 1)` easing.
- **Pixel-Accurate Mobile Responsiveness**: Tailored for mobile viewports (390px+) with zero horizontal overflow, stacked pricing controls, touch-friendly accordions, and swipeable comparison matrices.
- **Infinite Looping Marquee**: Continuous dual-row client ticker with linear CSS keyframes and edge mask gradients.
- **Service Stacking Cards**: Dynamic sticky stacking cards showcasing capabilities and tech stacks.
- **Dynamic Pricing Engine**: Multi-tiered packages with milestone-based delivery guarantees and currency formatters.
- **Interactive Founder & Contact Suite**: Integrated founder bio, calendar booking triggers, and responsive contact forms.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI components and rendering |
| **Vite 6** | Ultra-fast HMR and optimized production bundling |
| **Tailwind CSS 3** | Utility-first styling with custom metallic utilities |
| **Framer Motion 12** | Entrance transitions and scroll reveal orchestration |
| **Lenis Scroll** | Inertial smooth scrolling across desktop and mobile |
| **React Router 7** | Client-side routing with scroll restoration |
| **Lucide React** | Clean, minimalist icon system |

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure **Node.js 18+** is installed on your machine.

### 2. Installation
```bash
git clone https://github.com/jobayer-hossain-dev/devorica-new-updated-ui.git
cd devorica-new-updated-ui
npm install
```

### 3. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Production Build
Compile and bundle optimized static assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── brand/          # Vector logos and brand assets
│   ├── fonts/          # Custom typography (Switzer)
│   ├── homePage/       # Showcase videos and visual media
│   └── images/         # Optimized imagery
├── src/
│   ├── components/     # Reusable UI modules (Navbar, Footer, Pricing, etc.)
│   ├── data/           # Structured content (services, blogs, pricing)
│   ├── hooks/          # Custom hooks (useScrollReveal, Lenis context)
│   ├── pages/          # Route views (HomePage, AboutPage, Services, Work, Contact)
│   ├── App.jsx         # Root app wrapper with Lenis smooth scroll
│   ├── index.css       # Design tokens, keyframes, and metallic button styles
│   └── main.jsx        # App entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License

Copyright © Devorica. All rights reserved.
