import { AnimatePresence, motion } from "motion/react";
import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/data/wedding";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const t = useCountdown(wedding.dateISO);

  return (
    <section
      className="relative overflow-hidden bg-ivory py-24 text-center sm:py-32"
      aria-label="Countdown to the wedding day"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="label-xs text-gold">Counting the days</p>
        </Reveal>

        {t?.arrived ? (
          <h2 className="mt-10 font-display text-[clamp(2rem,7vw,4.5rem)] tracking-[0.08em] text-burgundy">
            The day has arrived
          </h2>
        ) : (
          <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-8">
            <Unit label="Days" value={t ? t.days : null} />
            <Unit label="Hours" value={t ? t.hours : null} />
            <Unit label="Minutes" value={t ? t.minutes : null} />
            <Unit label="Seconds" value={t ? t.seconds : null} />
          </div>
        )}

        <Divider className="mt-14" />
        <p className="mt-8 font-display text-xl italic text-espresso/70">
          {wedding.timeLabel}
        </p>
      </div>
    </section>
  );
}

function Unit({ label, value }: { label: string; value: number | null }) {
  const display = value === null ? "––" : pad(value);
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[clamp(2.75rem,10vw,6rem)] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ opacity: 0, y: "35%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-35%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="block font-display text-[clamp(2.5rem,9vw,5.5rem)] leading-none tabular-nums text-burgundy"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-4 label-xs text-espresso/55">{label}</span>
    </div>
  );
}
