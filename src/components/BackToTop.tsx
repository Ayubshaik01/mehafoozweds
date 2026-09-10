import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { getLenis } from "@/lib/smooth-scroll";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.7);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.8 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-[5.5rem] right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-ivory/75 text-burgundy shadow-[0_10px_30px_-10px_rgba(90,20,40,0.35)] backdrop-blur-md transition-colors hover:border-gold hover:bg-burgundy hover:text-ivory sm:bottom-8 sm:right-8"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
            aria-hidden
          >
            <ArrowUp size={17} strokeWidth={1.5} />
          </motion.span>
          <span
            className="pointer-events-none absolute inset-0 rounded-full border border-gold/20"
            aria-hidden
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
