import { motion, useScroll, useSpring } from "motion/react";
/* Thin progress line at the very top of the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return <motion.div aria-hidden="true" style={{ scaleX, top: "env(safe-area-inset-top)" }} className="fixed inset-x-0 z-[70] h-[2px] origin-left bg-signal" />;
}
