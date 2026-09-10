import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-architecture.jpg";
import { Divider, Filigree } from "./Ornament";
import { GoldDust } from "./GoldDust";
import { wedding } from "@/data/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, delay, ease: EASE },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <motion.img
          src={heroImg}
          alt="Candlelit marble palace courtyard hung with jasmine garlands at golden hour"
          width={1600}
          height={1008}
          fetchPriority="high"
          className="h-[114%] w-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.06 22 / .35) 0%, oklch(0.972 0.012 88 / .5) 38%, oklch(0.972 0.012 88 / .72) 62%, var(--ivory) 100%)",
        }}
      />
      <GoldDust density={22} />

      <Filigree className="pointer-events-none absolute left-5 top-24 hidden h-24 w-24 text-gold/45 md:block" />
      <Filigree className="pointer-events-none absolute bottom-24 right-5 hidden h-24 w-24 -scale-x-100 -scale-y-100 text-gold/45 md:block" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center"
      >
        <motion.p {...rise(0.3)} className="label-xs text-burgundy/70">
          {wedding.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-9 font-display leading-[0.92] text-burgundy"
          initial={{ opacity: 0, y: 30, letterSpacing: "0.22em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.06em" }}
          transition={{ duration: 2, delay: 0.6, ease: EASE }}
        >
          <span className="block text-[clamp(2.75rem,11vw,7.5rem)]">{wedding.bride}</span>
          <span className="my-2 block font-display text-[clamp(1.25rem,3.5vw,2.25rem)] italic text-gold">
            &amp;
          </span>
          <span className="block text-[clamp(2.75rem,11vw,7.5rem)]">{wedding.groom}</span>
        </motion.h1>

        <motion.p
          {...rise(1.5)}
          className="mx-auto mt-9 max-w-md font-display text-lg italic tracking-wide text-espresso/75 sm:text-xl"
        >
          {wedding.invitation}
        </motion.p>

        <motion.div {...rise(1.75)}>
          <Divider className="mt-9" />
        </motion.div>

        <motion.div
          {...rise(1.95)}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10"
        >
          <p className="label-xs text-espresso/80">{wedding.dateLabel}</p>
          <span className="hidden h-3 w-px bg-gold/60 sm:block" />
          <p className="label-xs text-espresso/80">{wedding.city}</p>
        </motion.div>
      </motion.div>

      <motion.span
        className="absolute bottom-8 left-1/2 -translate-x-1/2 label-xs text-espresso/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
        transition={{ delay: 2.6, duration: 4, repeat: Infinity, repeatType: "reverse" }}
      >
        Scroll
      </motion.span>
    </section>
  );
}
