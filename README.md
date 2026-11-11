# THETINY.SITE - URL Shortener Landing Page

> A modern, pixel-perfect, high-performance URL shortening and link management platform landing page built with **React 19**, **Vite**, and **Tailwind CSS v4** for the **Bangla Puzzle Limited** recruitment assignment.

---

##  Overview

**THETINY.SITE** is designed to transform long, cumbersome links into clean, trackable URLs. The interface combines contemporary SaaS aesthetics with smooth interactivity, responsive mobile layouts, and instant feedback.

---

## Tech Stack & Technical Specifications

| Technology | Version / Tooling | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | `React ^19.3.1` | Component-based UI architecture with modern hooks |
| **Build Tool & Bundler** | `Vite ^8.3.6` | Lightning-fast HMR and optimized Rolldown production bundling |
| **CSS Framework** | `Tailwind CSS ^4.3.5` | Modern utility-first CSS using `@tailwindcss/vite` |
| **UI Components** | `daisyui ^5.7.50` | Semantic UI utility plugins |
| **Icons** | `lucide-react ^1.72.0` + Inline SVGs | Ultra-lightweight, crisp vector icons |
| **Font Family** | `Plus Jakarta Sans` | Modern geometric sans-serif typography |
| **QR Engine** | Serverless QR API | Real-time QR generation with zero heavy client dependencies |
| **Compiler** | `babel-plugin-react-compiler` | Automatic memoization and performance optimization |

---

## Features & Implemented Sections

### 1.  Sticky Header / Navbar (`Navbar.jsx`)
- **Branding**: Tracked uppercase logo `THETINY.SITE`.
- **Navigation Links**: Quick anchor links (`Home`, `About`, `Blog`, `Terms`).
- **Call-to-Action**: `Log In` outline button and `Get Started Free` primary button.
- **Mobile Responsive Drawer**: Accessible toggle menu with keyboard listener (`Escape` close) and responsive media query cleanup.

### 2.  Hero Section (`Hero.jsx`)
- **Pill Badge**: `Trusted by thousands of users` with trending vector icon.
- **Hero Title**: Bold typography with brand accent color highlighting `in seconds`.
- **Login CTA Box**: Centered elevation card with purple lock icon, explanatory copy, and dual action triggers (`Login to Make URL` & `Sign Up Free`).

### 3.  Metrics Banner (`Stats.jsx`)
- High-contrast brand purple banner (`#5b21f0`).
- 4 key metrics:
  - `100K+` Links Created
  - `1M+` Total Clicks
  - `180+` Countries
  - `99.9%` Uptime

### 4.  Most Popular Links (`PopularLinks.jsx`)
- Curated list of high-traffic shortened links with target destinations.
- **Interactive Copy**: One-click clipboard copy with temporary visual `Copied!` confirmation.
- **Dynamic QR Generator**: Modal dialog generating scannable QR codes on the fly.
- Real-time click counters for social proof.

### 5.  Analytics & Growth Feature (`Growth.jsx`)
- **Feature Showcase**: Explains advanced capabilities like real-time analytics, branded domains, and QR tools.
- **Live Metrics Dashboard UI**: Visual preview widget displaying 24-hour clicks (`1,428`), country distribution (`74% US`), and mobile/desktop ratio (`68% / 32%`).

### 6.  Simple, Transparent Pricing (`Pricing.jsx`)
- 3 distinct tiered packages:
  - **Free ($0/month)**: Individual starting plan.
  - **Pro ($9/month)**: **Featured plan** in full solid brand purple with elevated shadow and priority support.
  - **Enterprise ($29/month)**: Advanced team and developer API plan.
- Clear checkmark feature lists and targeted CTA buttons.

### 7.  Testimonials (`Testimonials.jsx`)
- 5-star customer ratings and authentic feedback cards.
- Verified user credentials and company positions.

### 8.  Why Choose Our Platform? (`WhyChoose.jsx`)
- 3x2 responsive grid featuring 6 core value pillars:
  1. **Lightning Fast** (<10ms edge redirects)
  2. **Detailed Analytics** (UTM & geo-targeting)
  3. **Global CDN** (Redundant multi-region coverage)
  4. **QR Codes** (High-resolution downloads)
  5. **Secure** (SSL & phishing protection)
  6. **Real-time Control** (Instant destination updates)

### 9.  Comprehensive Footer (`Footer.jsx`)
- Company bio, newsletter & social channels (GitHub, X, LinkedIn, Discord).
- Support contacts (`support@thetiny.site`, phone).
- Categorized navigation columns (**Product** & **Company**).
- Copyright notice and legal policy links.

---

##  Project Structure

```text
Bangla puzzle/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── component/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Growth/
│   │   │   └── Growth.jsx
│   │   ├── Hero/
│   │   │   ├── hero.css
│   │   │   └── Hero.jsx
│   │   ├── Navbar/
│   │   │   ├── navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── PopularLinks/
│   │   │   └── PopularLinks.jsx
│   │   ├── Pricing/
│   │   │   └── Pricing.jsx
│   │   ├── Stats/
│   │   │   └── Stats.jsx
│   │   ├── Testimonials/
│   │   │   └── Testimonials.jsx
│   │   └── WhyChoose/
│   │       └── WhyChoose.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

##  Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### 1. Installation
Clone the repository and install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Production Build
Compile and bundle the project for production:
```bash
npm run build
```
The output will be generated inside the `dist/` directory.

### 4. Preview Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

##  Performance & Design Highlights

- **Tailwind CSS v4 Engine**: Utilizes Vite's native compilation plugin without legacy PostCSS overhead.
- **Zero Layout Shifts (CLS)**: Predefined dimensions and scalable SVG icons ensure immediate visual stability.
- **Interactive Feedback**: Instant state feedback on user actions (e.g., button click, clipboard copy, modal triggers).
- **Responsive Breakpoints**: Seamless adaptability across mobile (`<640px`), tablet (`640px - 1024px`), and desktop (`>1024px`).

---

##  License & Attribution

Developed for **Bangla Puzzle Limited** recruitment assignment.  
© 2026 Bangla Puzzle Limited. All rights reserved.
