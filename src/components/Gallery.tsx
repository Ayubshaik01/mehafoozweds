import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/gallery";
import { Divider } from "./Ornament";
import { Reveal } from "./Story";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : gallery[index];
  const open = current != null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  // swipe
  const touchX = useRef(0);

  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center label-xs text-gold">Moments</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-center font-display text-[clamp(2rem,5.5vw,4rem)] leading-tight text-burgundy">
            A film in still frames
          </h2>
        </Reveal>
        <Divider className="mt-8" />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
          {gallery.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image ${i + 1}: ${img.alt}`}
              className={`group relative overflow-hidden ${img.span}`}
              initial={{ opacity: 0, clipPath: "inset(14% 14% 14% 14%)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.3, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:h-full md:min-h-[15rem]"
              />
              <span className="pointer-events-none absolute inset-0 bg-burgundy-deep/0 transition-colors duration-700 group-hover:bg-burgundy-deep/10" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy-deep/94 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
            onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? 0)}
            onTouchEnd={(e) => {
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-h-[82vh] max-w-[92vw] object-contain shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
            />

            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close gallery"
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 text-ivory sm:right-8 sm:top-8"
            >
              <X size={18} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-ivory/80 hover:text-ivory sm:left-8"
            >
              <ChevronLeft size={20} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-ivory/80 hover:text-ivory sm:right-8"
            >
              <ChevronRight size={20} strokeWidth={1.2} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 label-xs text-ivory/50">
              {(index ?? 0) + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
