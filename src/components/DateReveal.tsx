import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { events, wedding } from "@/data/wedding";
import { Divider, Filigree } from "./Ornament";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Big cinematic "save the dates" reveal — numerals unveil one by one. */
export function DateReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const digits = "16.10.2026".split("");

  return (
    <section
      id="dates"
      ref={ref}
      aria-label="Save the dates"
      className="relative overflow-hidden bg-burgundy-deep py-28 text-center sm:py-40"
    >
      <Filigree className="pointer-events-none absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 text-gold/25" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: EASE }}
          className="label-xs text-gold"
        >
          Save the dates
        </motion.p>

        {/* Curtain-wipe numerals */}
        <div className="mt-10 flex items-end justify-center gap-[0.02em] overflow-hidden">
          {digits.map((d, i) => (
            <motion.span
              key={`${d}-${i}`}
              initial={{ y: "110%", opacity: 0, rotateX: 55 }}
              animate={inView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.25 + i * 0.09, ease: EASE }}
              className="inline-block font-display text-[clamp(2.6rem,13vw,9rem)] leading-[0.95] tracking-[0.02em] text-ivory"
              style={{ transformOrigin: "bottom" }}
            >
              {d === "." ? <span className="text-gold">·</span> : d}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 1.05, ease: EASE }}
          className="mx-auto mt-8 h-px w-2/3 origin-center bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
          className="mt-8 font-display text-xl italic text-ivory/70 sm:text-2xl"
        >
          {wedding.dateLabel.toLowerCase()} · {wedding.timeLabel.toLowerCase()}
        </motion.p>

        <div className={`mt-16 grid gap-px overflow-hidden rounded-sm border border-gold/20 ${events.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {events.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.35 + i * 0.15, ease: EASE }}
              className="bg-burgundy/35 px-6 py-10 backdrop-blur-sm"
            >
              <p className="label-xs text-gold/85">{e.name}</p>
              <p className="mt-4 font-display text-2xl text-ivory">
                {e.date.split(",")[1]?.trim() ?? e.date}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-ivory/55">
                {e.date.split(",")[0]}
              </p>
              <p className="mt-4 text-sm text-ivory/70">{e.time}</p>
            </motion.div>
          ))}
        </div>

        <Divider className="mt-16 opacity-60" />
      </div>
    </section>
  );
}
