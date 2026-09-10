import { motion, useScroll, useSpring } from "motion/react";

/** Slim gilded progress thread across the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, transparent, var(--gold, oklch(0.78 0.11 85)) 25%, oklch(0.92 0.07 92) 55%, var(--gold, oklch(0.78 0.11 85)) 80%, transparent)",
        boxShadow: "0 0 14px oklch(0.78 0.11 85 / .55)",
      }}
    />
  );
}
