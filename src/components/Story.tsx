import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import storyImg from "@/assets/story.jpg";
import { Arch } from "./Ornament";
import { wedding } from "@/data/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden bg-ivory py-24 sm:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-16">
        {/* Image, revealed through an arch mask */}
        <motion.figure
          className="relative md:col-span-6 md:col-start-1"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <div className="relative overflow-hidden rounded-t-[999px] shadow-[var(--shadow-soft)]">
            <motion.img
              src={storyImg}
              alt="A couple walking away down a candlelit marble palace corridor"
              width={1200}
              height={1500}
              loading="lazy"
              style={{ y: imgY }}
              className="h-[62vh] w-full scale-110 object-cover md:h-[78vh]"
            />
          </div>
          <Arch className="pointer-events-none absolute inset-0 h-full w-full translate-x-3 translate-y-3 text-gold/50" />
        </motion.figure>

        {/* Text */}
        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="label-xs text-gold">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-burgundy">
              {wedding.story.kicker}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {wedding.story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.18 + i * 0.08}>
                <p className="max-w-prose text-[0.95rem] leading-[1.9] text-espresso/80">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <p className="mt-10 font-display text-2xl italic text-gold">
              {wedding.bride} &amp; {wedding.groom}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
