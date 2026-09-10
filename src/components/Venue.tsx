import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Story";

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden bg-beige/60 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-20">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, clipPath: "inset(8% 12% 8% 12%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={venueImg}
            alt="Marble palace entrance framed by a white floral arch and brass lanterns at dusk"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-[46vh] w-full object-cover shadow-[var(--shadow-soft)] sm:h-[62vh]"
          />
        </motion.div>

        <div className="lg:col-span-5">
          <Reveal>
            <p className="label-xs text-gold">The Venue</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-burgundy">
              {wedding.venue}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-sm text-sm leading-[1.9] text-espresso/75">
              {wedding.venueTagline}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="mt-9 space-y-5 border-t border-gold/25 pt-8">
              <Row term="Address" value={wedding.address} />
              <Row term="Date" value={wedding.dateLabel} />
              <Row term="Time" value={wedding.timeLabel} />
            </dl>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href={wedding.mapUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="sweep mt-10 inline-flex min-h-[48px] items-center gap-3 border border-burgundy px-8 py-3 label-xs text-burgundy transition-colors hover:bg-burgundy hover:text-ivory"
            >
              <MapPin size={14} strokeWidth={1.3} aria-hidden />
              View location
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <dt className="label-xs text-espresso/45">{term}</dt>
      <dd className="col-span-2 text-sm leading-relaxed text-espresso/85">{value}</dd>
    </div>
  );
}
