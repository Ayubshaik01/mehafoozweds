import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Variant = "up" | "down" | "left" | "right" | "scale" | "veil";

const offsets: Record<Variant, { x?: number; y?: number; scale?: number }> = {
  up: { y: 34 },
  down: { y: -34 },
  left: { x: -44 },
  right: { x: 44 },
  scale: { scale: 0.94 },
  veil: { y: 26, scale: 0.985 },
};

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  amount = 0.35,
  duration = 1.15,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: Variant;
  amount?: number;
  duration?: number;
  className?: string;
}) {
  const from = offsets[variant];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", x: 0, y: 0, scale: 1, ...from }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Wrap a section so it drifts and settles as it enters the viewport. */
export function ParallaxSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
