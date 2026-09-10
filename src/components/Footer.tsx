import { motion } from "motion/react";
import { wedding } from "@/data/wedding";
import { Divider, Filigree } from "./Ornament";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ivory py-28 text-center sm:py-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.33 0.115 18) 0%, oklch(0.33 0.115 18 / 0) 100%)",
          opacity: 0.9,
        }}
        aria-hidden
      />
      <Filigree className="pointer-events-none absolute left-6 bottom-8 hidden h-20 w-20 -scale-y-100 text-gold/40 sm:block" />
      <Filigree className="pointer-events-none absolute right-6 bottom-8 hidden h-20 w-20 -scale-x-100 -scale-y-100 text-gold/40 sm:block" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-2xl px-6"
      >
        <p className="mx-auto max-w-md font-display text-xl italic leading-relaxed text-espresso/70">
          {wedding.closing.blessing}
        </p>
        <Divider className="mt-12" />
        <p className="mt-12 label-xs text-espresso/55">{wedding.closing.line}</p>
        <h2 className="mt-6 font-display text-[clamp(2rem,7vw,4.5rem)] leading-none tracking-[0.06em] text-burgundy">
          {wedding.bride} <span className="text-gold">&amp;</span> {wedding.groom}
        </h2>
        <p className="mt-8 label-xs text-espresso/55">{wedding.dateLabel}</p>
        <p className="mt-2 label-xs text-espresso/40">{wedding.yearLabel}</p>

        <Divider className="mt-14" />

        <div className="mt-12 space-y-2 text-sm leading-relaxed text-espresso/65">
          <p className="label-xs text-espresso/45">{wedding.hosts.line}</p>
          <p className="font-display text-2xl text-burgundy">{wedding.hosts.name}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-espresso/45">
            {wedding.hosts.qualification}
          </p>
          <p className="mx-auto max-w-md">{wedding.hosts.role}</p>
          <p>{wedding.hosts.address}</p>
          <p>Ph: {wedding.hosts.phones.join(" · ")}</p>
        </div>

        <p className="mt-10 label-xs text-burgundy/80">Note: {wedding.note}</p>
        <p className="mt-4 text-sm italic text-espresso/55">{wedding.wishesFrom}</p>

        <div className="mt-16 border-t border-gold/25 pt-10">
          <p className="label-xs text-espresso/40">Designed &amp; developed by</p>
          <p className="mt-3 font-display text-3xl tracking-[0.08em] text-burgundy">
            Ayub Shaik
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:ayubshaik.dev@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gold/45 px-7 py-3 label-xs text-burgundy transition-colors hover:bg-burgundy hover:text-ivory"
            >
              Contact developer
            </a>
            <a
              href="https://wa.me/919703003073"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-burgundy px-7 py-3 label-xs text-ivory transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-espresso/35">
            © {new Date().getFullYear()} Ayub Shaik · All rights reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
