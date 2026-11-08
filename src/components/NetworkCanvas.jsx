import { useEffect, useRef } from "react";

/* An abstract network of connected systems. Points live in 3D; the view
   rotates slowly and tilts with scroll, so the perspective changes as the
   visitor moves down the page. A few nodes carry the signal colour. */
const LABELS = ["API", "IAM", "TARA", "CLOUD", "DATA", "EDGE", "SOC", "CI/CD"];

export default function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, visible = true, t0 = performance.now();
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const count = () => (window.innerWidth < 640 ? 46 : window.innerWidth < 1100 ? 70 : 96);
    let nodes = [];
    const seed = () => {
      nodes = Array.from({ length: count() }, (_, i) => {
        const r = 0.55 + Math.random() * 0.45, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
        return {
          x: r * Math.sin(ph) * Math.cos(th) * 1.5, y: r * Math.cos(ph) * 0.85, z: r * Math.sin(ph) * Math.sin(th),
          sig: i % 13 === 0, label: i % 11 === 0 ? LABELS[(i / 11) % LABELS.length | 0] : null, ph: Math.random() * 6.28
        };
      });
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = now => {
      const t = (now - t0) / 1000;
      const scroll = Math.min(1.4, window.scrollY / Math.max(1, h));
      pointer.x += (pointer.tx - pointer.x) * 0.04; pointer.y += (pointer.ty - pointer.y) * 0.04;
      const ry = (reduce ? 0.4 : t * 0.045) + pointer.x * 0.25 + scroll * 0.9;
      const rx = -0.25 + pointer.y * 0.15 + scroll * 0.55;
      const zoom = 1 + scroll * 0.35;
      const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
      const scale = Math.min(w, h * 1.4) * 0.42 * zoom, ox = w * (w < 768 ? 0.5 : 0.66), oy = h * 0.5;

      const pts = nodes.map(n => {
        let x = n.x * cy - n.z * sy, z = n.x * sy + n.z * cy, y = n.y * cx - z * sx;
        z = n.y * sx + z * cx;
        const p = 2.6 / (2.6 + z);
        return { sx: ox + x * scale * p, sy: oy + y * scale * p, z, p, n };
      });

      ctx.clearRect(0, 0, w, h);
      const maxD = scale * 0.42;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.sx - b.sx, dy = a.sy - b.sy, d = Math.hypot(dx, dy);
          if (d < maxD) {
            const depth = (a.p + b.p) / 2;
            const sig = a.n.sig || b.n.sig;
            const alpha = (1 - d / maxD) * 0.28 * depth * (sig ? 1.5 : 1);
            ctx.strokeStyle = sig ? `rgba(232,101,10,${alpha})` : `rgba(169,180,194,${alpha})`;
            ctx.lineWidth = 0.8 * depth;
            ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
          }
        }
      }
      pts.sort((a, b) => b.z - a.z).forEach(({ sx, sy, p, n }) => {
        const pulse = n.sig && !reduce ? 0.5 + 0.5 * Math.sin(t * 1.6 + n.ph) : 0.6;
        const r = (n.sig ? 2.6 : 1.6) * p;
        if (n.sig) {
          ctx.fillStyle = `rgba(232,101,10,${0.12 * pulse})`;
          ctx.beginPath(); ctx.arc(sx, sy, r * 5, 0, 6.283); ctx.fill();
        }
        ctx.fillStyle = n.sig ? `rgba(232,101,10,${0.6 + 0.4 * pulse})` : `rgba(248,249,250,${0.25 + 0.45 * (p - 0.6)})`;
        ctx.beginPath(); ctx.arc(sx, sy, r, 0, 6.283); ctx.fill();
        if (n.label && w > 640) {
          ctx.font = "500 10px 'Geist Mono Variable', ui-monospace, monospace";
          ctx.fillStyle = `rgba(169,180,194,${0.18 + 0.35 * (p - 0.6)})`;
          ctx.fillText(n.label, sx + 7, sy + 3);
        }
      });
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    const onMove = e => { pointer.tx = (e.clientX / window.innerWidth - 0.5); pointer.ty = (e.clientY / window.innerHeight - 0.5); };
    const onResize = () => { resize(); if (nodes.length !== count()) seed(); if (reduce) draw(performance.now()); };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
    });

    resize(); seed(); io.observe(canvas);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    if (reduce) { draw(performance.now()); window.addEventListener("scroll", () => draw(performance.now()), { passive: true }); }
    else raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", onResize); window.removeEventListener("pointermove", onMove); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
