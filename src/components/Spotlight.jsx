import { useEffect } from "react";
/* A soft light follows the pointer across cards (.panel, .spot). Pure CSS variables, no re-renders. */
export default function Spotlight() {
  useEffect(() => {
    if (!matchMedia("(hover: hover)").matches) return;
    const move = e => {
      const el = e.target.closest?.(".panel, .spot"); if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return null;
}
