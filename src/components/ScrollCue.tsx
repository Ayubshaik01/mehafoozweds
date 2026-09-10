import { motion } from "motion/react";
import { scrollToSection } from "@/lib/smooth-scroll";

/** Animated mouse-wheel cue inviting the guest to scroll onward. */
export function ScrollCue({ target = "dates" }: { target?: string }) {
  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection(target)}
      aria-label="Scroll to continue"
      className="group absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="label-xs text-burgundy/60 transition-colors group-hover:text-burgundy">
        Scroll
      </span>
      <span className="relative flex h-9 w-[22px] items-start justify-center rounded-full border border-gold/60 bg-ivory/30 backdrop-blur-sm">
        <motion.span
          className="mt-[6px] h-[6px] w-[2px] rounded-full bg-gold"
          animate={{ y: [0, 11, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
      <motion.span
        className="h-6 w-px bg-gradient-to-b from-gold/70 to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </motion.button>
  );
}
