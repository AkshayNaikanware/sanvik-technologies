# Sanvik Technologies — React + TypeScript + Tailwind (Vite)

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # outputs to ./dist
    npm run preview

## Deploy
- **GitHub Pages:** push to `main`. In the repo go to Settings → Pages → Source = "GitHub Actions".
- **Netlify:** uses `netlify.toml` (build `npm run build`, publish `dist`).

## Structure
- `tailwind.config.js` — theme tokens (navy, brand, cyan, ink, muted, line, paper, Poppins)
- `src/components/ui/` — Button, Container, Section, SectionHeading, Kicker, Card, Badge, StatTile, Modal, PhotoBackground
- `src/components/sections/` — Hero, DeviceCard, DeviceSection, CourseCard, IconCardGrid, Branches, Contact, Footer
- `src/components/Navbar.tsx` — header with page tabs
- `src/pages/` — IndustryPage, StudentsPage
- `src/data/` — devices.ts, content.ts (edit text here)
- `src/assets/` — images (replace files, keep names)
