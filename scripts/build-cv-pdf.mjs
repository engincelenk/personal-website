/* Renders the tailored CVs to PDF and the social preview image.
   Usage: npm run build && npm run cv:pdf && npm run build   (PDFs land in public/cv) */
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const PORT = 4179, base = `http://localhost:${PORT}`;
const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore" });
await new Promise(r => setTimeout(r, 2500));
mkdirSync("public/cv", { recursive: true });
const files = [
  ["security", "en", "Engin-Celenk-CV-Cyber-Security.pdf"], ["architecture", "en", "Engin-Celenk-CV-IT-Architecture.pdf"], ["innovation", "en", "Engin-Celenk-CV-Technology-Innovation.pdf"],
  ["security", "de", "Engin-Celenk-Lebenslauf-Cyber-Security.pdf"], ["architecture", "de", "Engin-Celenk-Lebenslauf-IT-Architektur.pdf"], ["innovation", "de", "Engin-Celenk-Lebenslauf-Technologie-Innovation.pdf"]
];
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  for (const [focus, lang, file] of files) {
    await page.goto(`${base}/cv.html?focus=${focus}&lang=${lang}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: "print" });
    await page.pdf({ path: `public/cv/${file}`, format: "A4", printBackground: true, preferCSSPageSize: true });
    await page.emulateMedia({ media: "screen" });
    console.log("pdf", file);
  }
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
  await og.goto(`${base}/?lang=en`, { waitUntil: "networkidle" });
  await og.evaluate(() => document.fonts.ready);
  await og.waitForTimeout(500);
  await og.screenshot({ path: "public/og.png" });
  console.log("og.png");
} finally { await browser.close(); server.kill(); }
