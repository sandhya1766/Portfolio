# Project Walkthrough - Premium Portfolio Web App

This walkthrough summarizes the implementation, asset integration, styling setup, and build verification completed for Sandhya Vishwakarma's premium portfolio website.

## Changes Made

### Core Scaffold & Configuration
- **Vite React Init**: Initialized a React 19 + Vite project in the workspace.
- **Tailwind CSS v4 Integration**: Leveraged `@tailwindcss/vite` compiler plugin inside [vite.config.js](file:///c:/Users/Sandhya/Downloads/Porfolio/vite.config.js).
- **Core Design Styles**: Declared CSS theme variables (colors, fonts, animations) in [src/index.css](file:///c:/Users/Sandhya/Downloads/Porfolio/src/index.css) along with premium custom utilities (glassmorphism overlay masks, scroll animations).

### Asset Integrations
- **Transparent Profile Photo**: Located, reformatted, and copied the transparent removebg picture into [src/assets/profile.png](file:///c:/Users/Sandhya/Downloads/Porfolio/src/assets/profile.png) to serve as her headshot.
- **Real Resume PDF**: Copied her real local PDF file into [src/assets/resume.pdf](file:///c:/Users/Sandhya/Downloads/Porfolio/src/assets/resume.pdf) to allow direct downloads from CTA triggers.

### Interactive Components
- [Loader.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Loader.jsx): Renders a black screen staggered character fade for "SANDHYA", then morphs into "Building Intelligent Solutions" before fading into home.
- [CursorGlow.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/CursorGlow.jsx): Follows mouse movement using Framer Motion springs to cast a light/dark halo overlay behind interactions.
- [Navbar.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Navbar.jsx): Sticky header implementing scroll indicators, responsive drawer, theme state toggling, and resume link.
- [Hero.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Hero.jsx): Entrance animations hosting looping role declarations (Ambassador, ML Engineer, Coordinator) and CTAs.
- [About.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/About.jsx) & [Impact.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Impact.jsx): Grid sections outlining credentials and numeric indicators (students educated, repositories, certifications).
- [GeminiAmbassador.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/GeminiAmbassador.jsx) & [IEEESection.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/IEEESection.jsx): Dual horizontal and vertical timeline modules listing student chapters event logs (AR workshops, NGO visits, panels).
- [Projects.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Projects.jsx) & [GithubGrid.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/GithubGrid.jsx): Cards grid outlining her four real project portfolios along with a Git contribution boxes widget.
- [Certifications.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Certifications.jsx), [Achievements.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Achievements.jsx) & [Education.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Education.jsx): Details cards showing her scores (85%, 88%), Oracle Cloud, and Microsoft certified milestones.
- [Contact.jsx](file:///c:/Users/Sandhya/Downloads/Porfolio/src/components/Contact.jsx): Glassmorphism form with EmailJS integration and loading status screens.

### SEO Verification
- Created [public/robots.txt](file:///c:/Users/Sandhya/Downloads/Porfolio/public/robots.txt) and [public/sitemap.xml](file:///c:/Users/Sandhya/Downloads/Porfolio/public/sitemap.xml).
- Updated [index.html](file:///c:/Users/Sandhya/Downloads/Porfolio/index.html) with descriptive metadata and standard Open Graph description cards.

---

## Verification Results

### Build Compilation Check
We validated build success via `npm run build`:
```bash
vite v8.1.0 building client environment for production...
transforming...✓ 408 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                     2.21 kB │ gzip:   0.82 kB
dist/assets/profile-DNducz3I.png   45.08 kB
dist/assets/resume-DgJ1Yb9E.pdf   235.00 kB
dist/assets/index-CgQ2ha_w.css     78.46 kB │ gzip:  11.45 kB
dist/assets/index-BuASrR_2.js     424.39 kB │ gzip: 129.25 kB

✓ built in 406ms
```
The bundle size is optimized, and rollup generated zero compilation warnings or code errors.

---

## Deployment & Local Testing Guide

### 1. Previewing Locally
To check layout, responsiveness, dark mode triggers, and cursor halos locally:
```bash
# Run local Vite development server
npm run dev

# Preview production build locally
npm run preview
```

### 2. Setting Up EmailJS (For Contact Form)
Create a `.env` file in the root directory of your project and enter your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
If these variables are omitted, the form automatically executes a mock success animation after a short delay so that visitors can test the visual interface seamlessly.

### 3. Deploying to Vercel/Netlify
Simply push the repository to GitHub, link it on Vercel or Netlify, and specify:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variables:** Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in the project settings panel.
