import { motion } from "motion/react";
import { MapPin, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/smooth-scroll";
import { wedding } from "@/data/wedding";
import { MusicControl } from "./MusicControl";

export function MobileActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-2 rounded-full border border-gold/30 bg-ivory/80 px-3 py-2 backdrop-blur-xl sm:hidden"
    >
      <button
        type="button"
        onClick={() => scrollToSection("rsvp")}
        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 label-xs text-burgundy"
      >
        <Mail size={13} strokeWidth={1.3} aria-hidden />
        RSVP
      </button>
      <span className="h-5 w-px bg-gold/30" aria-hidden />
      <a
        href={wedding.mapUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 label-xs text-burgundy"
      >
        <MapPin size={13} strokeWidth={1.3} aria-hidden />
        Location
      </a>
      <span className="h-5 w-px bg-gold/30" aria-hidden />
      <MusicControl />
    </motion.div>
  );
}
