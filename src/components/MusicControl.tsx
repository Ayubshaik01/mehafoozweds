import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { wedding } from "@/data/wedding";

export function MusicControl({ className = "" }: { className?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(wedding.musicUrl);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audio.addEventListener("error", () => setAvailable(false));
    audioRef.current = audio;

    // Try to start automatically; browsers may block until first interaction.
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Mute music" : "Play music"}
      className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory/60 backdrop-blur-md transition-colors hover:border-gold hover:bg-ivory/80 ${className}`}
    >
      <span className="sr-only">{playing ? "Music On" : "Music Muted"}</span>
      <motion.span
        key={playing ? "on" : "off"}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      >
        {playing ? (
          <Volume2 className="h-5 w-5 text-burgundy" />
        ) : (
          <VolumeX className="h-5 w-5 text-burgundy/70" />
        )}
      </motion.span>
    </button>
  );
}
