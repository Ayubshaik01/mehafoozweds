import { motion } from "motion/react";
import { wedding } from "@/data/wedding";

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        className="relative flex items-center gap-4 text-gold"
        initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.06 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-5xl tracking-[0.15em] sm:text-6xl">
          {wedding.initials.groom}
        </span>
        <span className="font-display text-2xl opacity-60 sm:text-3xl">&amp;</span>
        <span className="font-display text-5xl tracking-[0.15em] sm:text-6xl">
          {wedding.initials.bride}
        </span>
      </motion.div>

      <motion.span
        className="pointer-events-none absolute h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        style={{ top: "calc(50% + 3.2rem)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      />
    </motion.div>
  );
}
