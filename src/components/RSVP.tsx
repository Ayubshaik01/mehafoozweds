import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { wedding } from "@/data/wedding";
import { Divider } from "./Ornament";
import { GoldDust } from "./GoldDust";

const EASE = [0.22, 1, 0.36, 1] as const;

type Errors = Partial<Record<"name" | "contact" | "guests", string>>;

export function RSVP() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const guests = Number(data.get("guests") ?? 1);

    const next: Errors = {};
    if (name.length < 2) next.name = "Please share your name.";
    if (!/^([^@\s]+@[^@\s]+\.[^@\s]+|[+\d][\d\s-]{6,})$/.test(contact))
      next.contact = "A valid phone number or email, please.";
    if (!Number.isFinite(guests) || guests < 1 || guests > 20)
      next.guests = "Between 1 and 20 guests.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Replace with a real submission (server function / email) when ready.
    setSent(true);
  };

  return (
    <section
      id="rsvp"
      className="relative isolate overflow-hidden bg-burgundy py-24 sm:py-36"
    >
      <GoldDust density={18} />
      <div className="relative mx-auto max-w-2xl px-6">
        <p className="text-center label-xs text-gold/85">Kindly respond</p>
        <h2 className="mt-6 text-center font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-tight text-ivory">
          Will you join us?
        </h2>
        <Divider className="mt-8 opacity-70" />

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="mt-16 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="font-display text-2xl italic leading-relaxed text-ivory sm:text-3xl">
                Thank you for celebrating this beautiful beginning with us.
              </p>
              <p className="mt-6 label-xs text-gold/80">
                {attending === "no"
                  ? "You will be missed dearly."
                  : "We cannot wait to see you there."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mt-14 space-y-9"
            >
              <Field
                id="name"
                name="name"
                label="Full name"
                autoComplete="name"
                error={errors.name}
              />
              <Field
                id="contact"
                name="contact"
                label="Phone or email"
                autoComplete="email"
                error={errors.contact}
              />
              <Field
                id="guests"
                name="guests"
                label="Number of guests"
                type="number"
                defaultValue={1}
                error={errors.guests}
              />
              <Field id="message" name="message" label="A message for us" textarea />

              <input type="hidden" name="attending" value={attending ?? ""} />

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <button
                  type="submit"
                  onClick={() => setAttending("yes")}
                  className="sweep min-h-[52px] flex-1 border border-gold bg-gold/15 px-6 label-xs text-ivory transition-colors hover:bg-gold hover:text-burgundy-deep"
                >
                  Joyfully accept
                </button>
                <button
                  type="submit"
                  onClick={() => setAttending("no")}
                  className="min-h-[52px] flex-1 border border-ivory/25 px-6 label-xs text-ivory/70 transition-colors hover:border-ivory/60 hover:text-ivory"
                >
                  Regretfully decline
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  error,
  textarea,
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  textarea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const shared =
    "peer w-full border-0 border-b border-ivory/25 bg-transparent px-0 pb-3 pt-6 text-ivory placeholder-transparent transition-colors focus:border-gold focus:outline-none";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={3}
          placeholder={label}
          className={`${shared} resize-none`}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          name={name}
          placeholder={label}
          className={shared}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-0 label-xs text-ivory/45 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[0.8rem] peer-placeholder-shown:tracking-[0.2em] peer-focus:top-0 peer-focus:text-[0.6875rem] peer-focus:tracking-[0.42em] peer-focus:text-gold"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs italic text-rose-muted">
          {error}
        </p>
      )}
    </div>
  );
}

export const rsvpNote = wedding.bride;
