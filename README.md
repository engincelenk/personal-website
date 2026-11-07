# Engin Celenk – interaktiver Lebenslauf

Live: https://ec.immofuchs.info (GitHub Pages, Deployment bei jedem Push auf `main`).

## Was die Seite kann
- **Blickwinkel**: Gesamtbild, Cyber Security, Architekt, Solution Manager, Projektleitung. Die ganze Seite stellt sich darauf ein.
- **Fit-Check**: Stellenanzeige einfügen → Passungswert, Treffer nach Säulen, markierte Anzeige, ehrliche Lücken und ein automatisch formuliertes Kurzprofil zum Kopieren. Läuft komplett im Browser.
- **Werdegang** als Zeitleiste (Gantt) plus filterbare Detailliste.
- **Bildungstreppe** ab 1994 und der **„Mechie & Techi“-Baum** aus dem Lebenslauf.
- **Digitaler Zwilling**: beantwortet Fragen nur aus den Fakten in `data.js`.
- Sprache der Seite: Englisch.

## Personalisierte Bewerbungslinks
`/link.html` öffnen (nicht verlinkt, `noindex`), Firma, Ansprechpartner, Stelle und Blickwinkel eintragen, Link kopieren.
Beispiel: `https://ec.immofuchs.info/?firma=Porsche+AG&an=Ms.+M%C3%BCller&rolle=Cyber+Security+Engineer&fokus=sec`

Parameter: `firma` (oder `company`), `an` (oder `to`), `rolle` (oder `role`), `fokus` (`sec` | `arch` | `e2e` | `pm`).

## Inhalte ändern
Alle Texte stehen in `data.js`; angezeigt wird jeweils der `en`-Text. Oberflächentexte stehen oben in `app.js` (`UI`).
Optional: `askEndpoint` in `data.js` auf einen kleinen Proxy zu einem Sprachmodell setzen; ohne Eintrag antwortet der Zwilling offline aus den Fakten.
