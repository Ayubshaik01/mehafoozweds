import { useEffect, useRef } from "react";

/**
 * Cinematic heart trail that follows the pointer (mouse, pen and touch).
 * Hearts are spawned on movement, drift upward with a gentle sway and
 * dissolve away. Purely decorative — never intercepts pointer events.
 */

const HEART_PATH =
  "M12 21s-6.7-4.35-9.33-8.2C.9 10.1 2 6.4 5.2 5.2 7.3 4.4 9.7 5.1 11 6.9c.4.5.6.9 1 1.5.4-.6.6-1 1-1.5 1.3-1.8 3.7-2.5 5.8-1.7 3.2 1.2 4.3 4.9 2.53 7.6C18.7 16.65 12 21 12 21z";

const MAX_LIVE = 34;

export function HeartTrail() {
  const layer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const host = layer.current;
    if (!host) return;

    let last = { x: 0, y: 0, set: false };
    let live = 0;
    let queued: { x: number; y: number } | null = null;
    let frame = 0;

    const spawn = (x: number, y: number) => {
      if (live >= MAX_LIVE) return;
      live += 1;

      const el = document.createElement("span");
      const size = 10 + Math.random() * 16;
      const drift = (Math.random() - 0.5) * 90;
      const rise = 70 + Math.random() * 90;
      const life = 1100 + Math.random() * 900;
      const rot = (Math.random() - 0.5) * 40;

      el.className = "heart-particle";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.setProperty("--dx", `${drift}px`);
      el.style.setProperty("--dy", `${rise}px`);
      el.style.setProperty("--r", `${rot}deg`);
      el.style.setProperty("--r2", `${rot + (Math.random() - 0.5) * 50}deg`);
      el.style.setProperty("--o", `${0.5 + Math.random() * 0.4}`);
      el.style.animationDuration = `${life}ms`;
      el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${HEART_PATH}"/></svg>`;

      host.appendChild(el);
      window.setTimeout(() => {
        el.remove();
        live -= 1;
      }, life + 60);
    };

    const flush = () => {
      frame = 0;
      if (!queued) return;
      const { x, y } = queued;
      queued = null;

      if (!last.set) {
        last = { x, y, set: true };
        spawn(x, y);
        return;
      }
      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 16) return;

      // Interpolate so fast movements still leave a continuous ribbon.
      const steps = Math.min(3, Math.floor(dist / 16));
      for (let i = 1; i <= steps; i += 1) {
        const t = i / steps;
        spawn(
          last.x + dx * t + (Math.random() - 0.5) * 10,
          last.y + dy * t + (Math.random() - 0.5) * 10,
        );
      }
      last = { x, y, set: true };
    };

    const onMove = (e: PointerEvent) => {
      queued = { x: e.clientX, y: e.clientY };
      if (!frame) frame = window.requestAnimationFrame(flush);
    };

    const onLeave = () => {
      last.set = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onLeave, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onLeave);
      document.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
      host.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[95] overflow-hidden"
    />
  );
}
