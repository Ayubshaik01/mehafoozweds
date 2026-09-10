import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import invitationPdf from "@/assets/wedding-invitation.pdf.asset.json";

const KEY = "invitation-card-downloaded";
const FILENAME = "Syed-Sadiya-Ahamed-and-Shaik-Saleem-Invitation.pdf";

/**
 * Automatically offers the printed invitation card once the guest has been
 * on the page for three seconds. A discreet gold prompt stays available in
 * case the browser blocks the automatic download.
 */
export function InvitationDownload({ active }: { active: boolean }) {
  const [prompt, setPrompt] = useState(false);

  const download = useCallback(() => {
    const a = document.createElement("a");
    a.href = invitationPdf.url;
    a.download = FILENAME;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (sessionStorage.getItem(KEY) === "true") return;
    const t = window.setTimeout(() => {
      sessionStorage.setItem(KEY, "true");
      download();
      setPrompt(true);
      window.setTimeout(() => setPrompt(false), 9000);
    }, 3000);
    return () => window.clearTimeout(t);
  }, [active, download]);

  return (
    <AnimatePresence>
      {prompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-1/2 z-[70] w-[min(92vw,26rem)] -translate-x-1/2 rounded-sm border border-gold/40 bg-burgundy/95 px-6 py-5 text-center shadow-2xl backdrop-blur-sm sm:bottom-10 sm:left-auto sm:right-8 sm:translate-x-0"
        >
          <p className="label-xs text-gold">The invitation card</p>
          <p className="mt-3 font-display text-lg leading-snug text-ivory/90">
            Your copy is downloading.
          </p>
          <button
            type="button"
            onClick={download}
            className="mt-4 label-xs text-ivory/70 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-ivory"
          >
            Download again
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const invitationPdfUrl = invitationPdf.url;
export const invitationPdfName = FILENAME;
