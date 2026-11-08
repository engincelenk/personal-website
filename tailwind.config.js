/** Design DNA: Intelligence meets Technology. Deep navy ground, orange only for interaction and key statements. */
export default {
  content: ["./index.html", "./cv.html", "./legal.html", "./link.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",      // page ground
        deep: "#0B111D",     // deeper wells
        navy: "#1E3A5F",     // panels, lines
        signal: "#E8650A",   // interaction + key statements
        snow: "#F8F9FA",     // primary text
        mist: "#A9B4C2"      // secondary text
      },
      fontFamily: {
        sans: ["Geist Variable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono Variable", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      maxWidth: { page: "1200px" },
      letterSpacing: { label: "0.14em" }
    }
  },
  plugins: []
};
