import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { events } from "@/data/wedding";
import { Divider } from "./Ornament";
import { GoldDust } from "./GoldDust";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.6 });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section id="events" className="relative overflow-hidden bg-beige/60 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-center label-xs text-gold">The Celebrations</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-center font-display text-[clamp(2rem,5.5vw,4rem)] leading-tight text-burgundy">
            Five evenings, one beginning
          </h2>
        </Reveal>
        <Divider className="mt-8" />

        <div ref={ref} className="relative mt-20 pl-8 sm:pl-0">
          {/* the illuminating thread */}
          <div className="absolute bottom-0 left-[3px] top-0 w-px bg-gold/20 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute bottom-0 left-[3px] top-0 w-px origin-top bg-gold sm:left-1/2 sm:-translate-x-1/2"
            style={{ scaleY: lineScale, opacity }}
          />

          <ol className="space-y-16 sm:space-y-24">
            {events.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.id} className="relative sm:grid sm:grid-cols-2 sm:gap-14">
                  <motion.div
                    initial={{ opacity: 0, y: 34, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: EASE }}
                    className={
                      left
                        ? "sm:col-start-1 sm:pr-4 sm:text-right"
                        : "sm:col-start-2 sm:pl-4"
                    }
                  >
                    {e.highlight ? (
                      <HighlightCard event={e} />
                    ) : (
                      <div>
                        <p className="label-xs text-espresso/55">{e.date}</p>
                        <h3 className="mt-3 font-display text-3xl text-burgundy sm:text-4xl">
                          {e.name}
                        </h3>
                        <p className="mt-2 label-xs text-gold">
                          {e.time} · {e.venue}
                        </p>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-espresso/75 sm:inline-block">
                          {e.description}
                        </p>
                        {e.dressCode && (
                          <p className="mt-3 text-xs italic text-espresso/55">
                            Attire — {e.dressCode}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* node */}
                  <span
                    className={`absolute -left-8 top-2 flex h-[9px] w-[9px] items-center justify-center sm:left-1/2 sm:-translate-x-1/2 ${
                      e.highlight ? "" : ""
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`block h-[9px] w-[9px] rotate-45 ${
                        e.highlight
                          ? "bg-gold shadow-[0_0_22px_6px_rgba(206,168,96,0.45)]"
                          : "border border-gold bg-ivory"
                      }`}
                    />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="relative isolate overflow-hidden bg-burgundy px-7 py-12 text-center shadow-[var(--shadow-soft)] sm:px-10 sm:py-14">
      <GoldDust density={16} />
      <p className="label-xs text-gold/80">The beginning of forever</p>
      <h3 className="mt-5 font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-none text-ivory">
        {event.name}
      </h3>
      <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
      <p className="mt-6 font-display text-2xl tracking-[0.14em] text-gold">{event.date}</p>
      <p className="mt-3 label-xs text-ivory/75">{event.time}</p>
      <p className="mt-1 label-xs text-ivory/75">{event.venue}</p>
      <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
        {event.description}
      </p>
      {event.dressCode && (
        <p className="mt-4 text-xs italic text-ivory/50">Attire — {event.dressCode}</p>
      )}
    </div>
  );
}
