import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { wedding } from "@/data/wedding";

/**
 * Cinematic entrance.
 *
 * Drop a generated film at /public/assets/curtain-opening.mp4 and it plays
 * automatically (poster: /public/assets/curtain-poster.jpg). If the file is
 * missing, fails to load, or autoplay is refused, an equally cinematic
 * CSS velvet-curtain sequence runs instead — the experience never breaks.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function IntroCurtain({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [mode, setMode] = useState<"probing" | "css">("probing");
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(onDone, 1200);
  }, [onDone]);

  useEffect(() => {
    if (reduced) {
      finish();
      return;
    }
    const t = window.setTimeout(() => setMode("css"), 300);
    return () => window.clearTimeout(t);
  }, [reduced, finish]);

  // Curtain timeline: dark → curtains → open → hold → hero.
  useEffect(() => {
    if (mode !== "css") return;
    const t = window.setTimeout(finish, 5400);
    return () => window.clearTimeout(t);
  }, [mode, finish]);


  return (
    <motion.div
      className="fixed inset-0 z-[90] overflow-hidden bg-burgundy-deep"
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 1.1, ease: EASE }}
      aria-label="Opening sequence"
    >
      {/* Velvet curtain scene */}
      <div className="absolute inset-0">
          {/* warm light behind the curtains */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 58%, oklch(0.88 0.09 82) 0%, oklch(0.6 0.1 60) 32%, oklch(0.22 0.075 20) 78%)",
            }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: mode === "css" ? 1 : 0, scale: 1 }}
            transition={{ duration: 5, ease: EASE, delay: 1 }}
          />
          <CurtainPanel side="left" active={mode === "css"} />
          <CurtainPanel side="right" active={mode === "css"} />

          {/* monogram glinting in the opening */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: mode === "css" ? [0, 0, 1, 1] : 0 }}
            transition={{ duration: 6, times: [0, 0.55, 0.78, 1], ease: "easeOut" }}
          >
            <span className="font-display text-5xl tracking-[0.3em] text-ivory/90 drop-shadow-[0_0_40px_rgba(206,168,96,0.7)] sm:text-7xl">
              {wedding.initials.bride}&nbsp;&amp;&nbsp;{wedding.initials.groom}
            </span>
          </motion.div>
        </div>
      )}

      {/* final brighten into the hero */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: leaving ? 0.9 : 0 }}
        transition={{ duration: 1, ease: EASE }}
      />

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 label-xs text-ivory/45 transition-opacity duration-500 hover:text-ivory/90 focus-visible:text-ivory sm:bottom-9 sm:left-auto sm:right-10 sm:translate-x-0"
      >
        Enter invitation
      </button>
    </motion.div>
  );
}

function CurtainPanel({ side, active }: { side: "left" | "right"; active: boolean }) {
  const isLeft = side === "left";
  return (
    <motion.div
      className="absolute top-0 h-full w-[52%]"
      style={{
        [isLeft ? "left" : "right"]: 0,
        transformOrigin: isLeft ? "left center" : "right center",
        backgroundImage: `
          repeating-linear-gradient(90deg,
            oklch(0.26 0.09 20) 0px,
            oklch(0.38 0.12 20) 26px,
            oklch(0.2 0.07 20) 54px,
            oklch(0.3 0.1 20) 82px),
          linear-gradient(180deg, oklch(0.16 0.05 20) 0%, oklch(0.3 0.1 20) 45%, oklch(0.14 0.045 20) 100%)`,
        boxShadow: isLeft
          ? "inset -40px 0 80px -30px rgba(0,0,0,.85)"
          : "inset 40px 0 80px -30px rgba(0,0,0,.85)",
      }}
      initial={{ x: 0, scaleX: 1 }}
      animate={active ? { x: isLeft ? "-86%" : "86%", scaleX: 0.86 } : { x: 0 }}
      transition={{ duration: 3.2, ease: [0.6, 0, 0.15, 1], delay: 0.9 }}
    >
      {/* gold hem */}
      <span
        className="absolute bottom-0 left-0 right-0 h-6"
        style={{ background: "var(--gradient-gold)", opacity: 0.55 }}
      />
      <span
        className={`absolute top-0 h-full w-8 ${isLeft ? "right-0" : "left-0"}`}
        style={{
          background: `linear-gradient(${isLeft ? "270deg" : "90deg"}, oklch(0.7 0.08 78 / .5), transparent)`,
        }}
      />
    </motion.div>
  );
}
