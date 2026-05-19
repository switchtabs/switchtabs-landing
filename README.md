# SwitchTabs — Landing Page

Cross-tab intelligence and recovery for Shopify stores. Built with React, Vite, and Tailwind CSS.

🌐 **Live site:** [switchtabs.com](https://switchtabs.com)

---

## Deploying

Push to the `main` branch — GitHub Actions automatically builds and deploys to GitHub Pages. No local setup required.

To point your custom domain (`switchtabs.com`) at GitHub Pages:
1. Go to **Settings → Pages** in your GitHub repo
2. Set the custom domain to `switchtabs.com`
3. Add a `CNAME` DNS record at your domain registrar pointing to `<your-github-username>.github.io`

## Making Edits

All source files are in `src/app/components/`:

| File | Section |
|---|---|
| [Hero.tsx](src/app/components/Hero.tsx) | Hero — headline, buttons, browser mockup |
| [ProductTabs.tsx](src/app/components/ProductTabs.tsx) | Intelligence / Recovery tab switcher |
| [PricingSlider.tsx](src/app/components/PricingSlider.tsx) | Interactive pricing slider |
| [FAQ.tsx](src/app/components/FAQ.tsx) | FAQ accordion |
| [Footer.tsx](src/app/components/Footer.tsx) | Footer links and CTA |

Edit any file, commit, push — the site redeploys automatically.

## Tech Stack

- [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) — accessible primitives
- [Lucide React](https://lucide.dev/) — icons

---

© 2026 SwitchTabs. All rights reserved.