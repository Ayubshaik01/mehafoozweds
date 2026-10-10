import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden bg-beige/60 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label-xs text-gold">The Venue</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-burgundy">
              The Auspicious Venue
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-sm leading-[1.9] text-espresso/75">
              {wedding.venueTagline}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {wedding.venues.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-gold/25 bg-ivory shadow-[var(--shadow-soft)]"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={venueImg}
                  alt={`${v.name} — ${v.label} venue`}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 via-burgundy-deep/10 to-transparent" aria-hidden />
                <p className="absolute bottom-5 left-6 label-xs text-ivory/90">{v.label}</p>
              </div>

              <div className="p-8 sm:p-10">
                <h3 className="font-display text-2xl tracking-[0.06em] text-burgundy sm:text-3xl">
                  {v.name}
                </h3>
                <dl className="mt-7 space-y-5 border-t border-gold/25 pt-7">
                  <Row term="Address" value={v.address} />
                  <Row term="When" value={v.detail} />
                </dl>
                <a
                  href={v.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sweep mt-9 inline-flex min-h-[48px] items-center gap-3 border border-burgundy px-8 py-3 label-xs text-burgundy transition-colors hover:bg-burgundy hover:text-ivory"
                >
                  <MapPin size={14} strokeWidth={1.3} aria-hidden />
                  View location
                </a>
              </div>
            </motion.article>
          ))}
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
