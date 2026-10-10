import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-architecture.jpg";
import { Divider, Filigree } from "./Ornament";
import { GoldDust } from "./GoldDust";
import { ScrollCue } from "./ScrollCue";
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
        className="relative mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 sm:py-28 text-center"
      >
        <div className="relative mx-auto max-w-3xl rounded-xl border border-gold/45 bg-ivory/92 p-7 shadow-[0_12px_50px_rgba(59,13,24,0.12)] backdrop-blur-md sm:p-11">
          {/* Inner royal border */}
          <div className="pointer-events-none absolute inset-2 rounded-lg border border-gold/30" />

          {/* 1. Bismillah */}
          <motion.div {...rise(0.25)} className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-burgundy sm:text-sm">
              {wedding.eyebrow}
            </p>
            <div className="mx-auto h-0.5 w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* 2. Blessings */}
          <motion.div {...rise(0.4)} className="mt-5 space-y-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold sm:text-sm">
              With the Blessings of:
            </p>
            <p className="font-display text-xl font-bold tracking-wide text-burgundy sm:text-2xl">
              {wedding.blessings}
            </p>
          </motion.div>

          {/* 3. Host */}
          <motion.div {...rise(0.55)} className="mt-6 space-y-2">
            <p className="font-display text-3xl font-bold tracking-[0.04em] text-burgundy sm:text-4xl md:text-5xl">
              {wedding.hosts.name}
            </p>
            <p className="mx-auto max-w-lg text-sm font-semibold leading-relaxed text-espresso/90 sm:text-base">
              Solicits your gracious presence on the auspicious occasion of the
            </p>
          </motion.div>

          {/* 4. Marriage Ceremony */}
          <motion.div
            {...rise(0.7)}
            className="my-5 inline-block border-y-2 border-gold/70 px-6 py-2.5 sm:px-10"
          >
            <p className="font-display text-2xl font-bold italic tracking-wide text-burgundy sm:text-3xl md:text-4xl">
              Marriage Ceremony
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-gold sm:text-sm">
              of his son
            </p>
          </motion.div>

          {/* 5. Couple */}
          <motion.h1
            className="mt-6 font-display leading-[0.98] text-burgundy"
            initial={{ opacity: 0, y: 24, letterSpacing: "0.14em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
            transition={{ duration: 1.8, delay: 0.85, ease: EASE }}
          >
            <span className="block text-[clamp(2.4rem,7.5vw,5rem)] font-bold tracking-wide">
              {wedding.groom}
            </span>
            <span className="mt-1.5 inline-block rounded-full border border-gold/40 bg-gold/15 px-4 py-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-burgundy/90 sm:text-sm">
              {wedding.groomDetails.qualification}
            </span>
            <span className="my-3 block font-display text-[clamp(1.35rem,3.2vw,2.2rem)] font-bold italic text-gold">
              with
            </span>
            <span className="block text-[clamp(2.4rem,7.5vw,5rem)] font-bold tracking-wide">
              {wedding.bride}
            </span>
            <span className="mt-2 block font-sans text-sm font-semibold text-espresso/85 sm:text-base">
              {wedding.brideDetails.parentage}
            </span>
            <span className="mt-0.5 block font-sans text-xs font-medium italic text-espresso/65">
              ({wedding.brideDetails.note})
            </span>
          </motion.h1>

          <motion.div {...rise(1.5)}>
            <Divider className="mt-9" />
          </motion.div>

          <motion.div
            {...rise(1.7)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {wedding.dateLabel}
            </p>
            <span className="hidden h-4 w-px bg-gold sm:block" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold sm:text-sm">
              {wedding.city}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <ScrollCue target="dates" />
    </section>
  );
}
