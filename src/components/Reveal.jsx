import { motion, useReducedMotion } from "motion/react";
/* Content is visible at rest; motion only adds a gentle rise when it enters view. */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const M = motion[as];
  if (reduce) return <M className={className}>{children}</M>;
  return (
    <M className={className} initial={{ opacity: 0.001, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }} transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </M>
  );
}
