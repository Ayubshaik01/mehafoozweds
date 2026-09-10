import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { MusicControl } from "./MusicControl";
import { scrollToSection } from "@/lib/smooth-scroll";
import { wedding } from "@/data/wedding";

const links = [
  { id: "hero", label: "Home" },
  { id: "dates", label: "Dates" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venues" },
  { id: "rsvp", label: "RSVP" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
        >
          <button
            onClick={() => go("hero")}
            className="font-display text-lg tracking-[0.32em] text-burgundy"
            aria-label="Back to top"
          >
            {wedding.initials.bride}
            <span className="mx-1 text-gold">&amp;</span>
            {wedding.initials.groom}
          </button>

          <ul className="hidden items-center gap-9 rounded-full border border-gold/25 bg-ivory/55 px-8 py-3 backdrop-blur-xl lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  data-active={active === l.id}
                  aria-current={active === l.id ? "true" : undefined}
                  className="link-underline label-xs text-espresso/70 transition-colors hover:text-burgundy data-[active=true]:text-burgundy"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <MusicControl className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-ivory/55 text-burgundy backdrop-blur-xl lg:hidden"
            >
              <Menu size={17} strokeWidth={1.2} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-burgundy-deep/97 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-ivory"
            >
              <X size={18} strokeWidth={1.2} />
            </button>
            <ul className="flex h-full flex-col items-center justify-center gap-7">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => go(l.id)}
                    className="font-display text-3xl tracking-[0.14em] text-ivory/90"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
