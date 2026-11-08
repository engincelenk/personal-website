# Beyond the CV · Engin Celenk

Personal technology & cyber security portfolio. Live: https://ec.immofuchs.info

Stack: React + Vite, Tailwind CSS, Motion, Lucide icons, self-hosted Geist fonts. Deployed to GitHub Pages by `.github/workflows` on every push to `main`.

## Sections
Home (animated system network) · Journey (interactive timeline) · Expertise (competence model) · Showcase (case studies + interactive mini TARA) · Innovation lab (Ask my portfolio, Challenge me) · About · Contact (tailored CV in three focuses).

## Edit content
- `src/data/profile.js` – person, journey, expertise, case studies, values, CV focuses
- `src/data/knowledge.js` – answers for “Ask my portfolio”, skill terms for “Challenge me”

## Tailored CV PDFs
`cv.html?focus=security|architecture|innovation` is the printable CV. After content changes regenerate the PDFs and the social image:

```bash
npm run build && npm run cv:pdf
```

The PDFs land in `public/cv/` and must be committed.

## Personal application links
Open `/link.html` (unlisted, noindex). Parameters: `company`, `to`, `role`, `focus` (`security` | `architecture` | `innovation`). German keys `firma`, `an`, `rolle`, `fokus` still work.

## Local development
```bash
npm install
npm run dev
```
