import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
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
      className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory/60 backdrop-blur-md transition-colors hover:border-gold ${className}`}
    >
      <span className="sr-only">{playing ? "Music On" : "Music Muted"}</span>
      <span className="flex h-4 items-end gap-[3px]" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-[2px] rounded-full bg-burgundy"
            animate={
              playing
                ? { height: ["30%", "100%", "45%", "80%", "30%"] }
                : { height: "30%" }
            }
            transition={
              playing
                ? { duration: 1.8 + i * 0.25, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4 }
            }
            style={{ height: "30%" }}
          />
        ))}
      </span>
    </button>
  );
}
