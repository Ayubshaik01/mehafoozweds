import { motion } from "motion/react";
import { wedding } from "@/data/wedding";

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        className="flex items-center gap-5 text-gold"
        initial={{ opacity: 0, scale: 0.96, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-4xl sm:text-5xl">
          {wedding.initials.bride}
        </span>
        <span className="font-display text-xl opacity-60 sm:text-2xl">&amp;</span>
        <span className="font-display text-4xl sm:text-5xl">{wedding.initials.groom}</span>
      </motion.div>
    </motion.div>
  );
}
