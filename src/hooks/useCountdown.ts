import { useEffect, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  arrived: boolean;
};

const compute = (target: number): Countdown => {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, arrived: true };
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    arrived: false,
  };
};

/** Counts down to an ISO date string that carries an explicit timezone offset. */
export function useCountdown(iso: string): Countdown | null {
  const target = new Date(iso).getTime();
  // null until mounted so SSR and the client agree on first paint.
  const [state, setState] = useState<Countdown | null>(null);

  useEffect(() => {
    setState(compute(target));
    const id = window.setInterval(() => setState(compute(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return state;
}
