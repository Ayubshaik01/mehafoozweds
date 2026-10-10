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
        className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center"
      >
        <motion.p {...rise(0.3)} className="label-xs text-burgundy/80 tracking-[0.22em] uppercase">
          {wedding.eyebrow}
        </motion.p>
        <motion.p {...rise(0.45)} className="mt-3 label-xs text-espresso/65">
          With the Blessings of: <span className="font-semibold text-burgundy">{wedding.blessings}</span>
        </motion.p>
        <motion.div {...rise(0.6)} className="mt-5 space-y-1">
          <p className="font-display text-2xl text-burgundy">{wedding.hosts.name}</p>
          <p className="label-xs text-espresso/70 max-w-md mx-auto">
            Solicits your gracious presence on the auspicious occasion of the
          </p>
          <p className="font-display text-xl sm:text-2xl italic tracking-wider text-gold pt-1">
            Marriage Ceremony of his son
          </p>
        </motion.div>

        <motion.h1
          className="mt-6 font-display leading-[0.95] text-burgundy"
          initial={{ opacity: 0, y: 30, letterSpacing: "0.22em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.06em" }}
          transition={{ duration: 2, delay: 0.6, ease: EASE }}
        >
          <span className="block text-[clamp(2.25rem,7.5vw,5rem)] tracking-wide">{wedding.groom}</span>
          <span className="mt-1 block text-xs tracking-[0.22em] uppercase text-espresso/50 font-sans">
            {wedding.groomDetails.qualification}
          </span>
          <span className="my-3 block font-display text-[clamp(1.2rem,2.8vw,1.8rem)] italic text-gold">
            with
          </span>
          <span className="block text-[clamp(2.25rem,7.5vw,5rem)] tracking-wide">{wedding.bride}</span>
          <span className="mt-2 block text-xs tracking-[0.16em] text-espresso/65 font-sans">
            {wedding.brideDetails.parentage}
          </span>
        </motion.h1>

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

      <ScrollCue target="dates" />
    </section>
  );
}
