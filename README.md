# Beyond the CV · Engin Celenk

Personal technology & cyber security portfolio. Live: https://ec.immofuchs.info

Stack: React + Vite, Tailwind CSS, Motion, Lucide icons, self-hosted Geist fonts. Deployed to GitHub Pages by `.github/workflows` on every push to `main`.

## Sections
Home (animated system network) · Journey (interactive timeline) · Expertise (competence model) · Showcase (case studies + interactive mini TARA) · Innovation lab (Ask my portfolio, Challenge me) · About · Contact (tailored CV in three focuses).

## Languages
German and English. Switch in the header or with `?lang=de` / `?lang=en`. Content texts are `{ en, de }` pairs in `src/data/`, interface texts in `src/strings.js`.

## Freelance page
`/freelance.html`: general service portfolio with three equal pillars (architecture, cyber security, project/program & solution management) and AI as the vertical across all three, shown as an interactive matrix; way of working, industries and a request configurator that writes a ready-made email. Content in `src/data/services.js`. Linked from the main navigation, hidden on personal application links.

## Edit content
- `src/data/profile.js` – person, journey, expertise, case studies, values, CV focuses
- `src/data/knowledge.js` – answers for “Ask my portfolio”, skill terms for “Challenge me”

## Tailored CV PDFs
`cv.html?lang=de|en` is the printable CV (one unified CV per language). After content changes regenerate the PDFs and the social image:

```bash
npm run build && npm run cv:pdf
```

Two PDFs (German and English) land in `public/cv/` and must be committed.

## Personal application links
Open `/link.html` (unlisted, noindex). Parameters: `company`, `to`, `role`, `focus` (`architecture` | `security` | `management` | `ai`), `lang` (`de` | `en`). German keys `firma`, `an`, `rolle`, `fokus` still work.

## Local development
```bash
npm install
npm run dev
```
