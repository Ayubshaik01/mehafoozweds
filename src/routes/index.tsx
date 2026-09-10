import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Preloader } from "@/components/Preloader";
import { IntroCurtain } from "@/components/IntroCurtain";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Events } from "@/components/Events";
import { Countdown } from "@/components/Countdown";
import { DateReveal } from "@/components/DateReveal";
import { Venue } from "@/components/Venue";
import { RSVP } from "@/components/RSVP";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { InvitationDownload } from "@/components/InvitationDownload";
import { HeartTrail } from "@/components/HeartTrail";
import { wedding } from "@/data/wedding";

export const Route = createFileRoute("/")({
  component: Invitation,
  head: () => ({
    meta: [
      { title: wedding.seo.title },
      { name: "description", content: wedding.seo.description },
      { name: "theme-color", content: "#3B0D18" },
      { property: "og:title", content: wedding.seo.title },
      { property: "og:description", content: wedding.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: wedding.seo.title },
      { name: "twitter:description", content: wedding.seo.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: wedding.seo.title,
          startDate: wedding.dateISO,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: wedding.venue,
            address: wedding.address,
          },
          description: wedding.seo.description,
        }),
      },
    ],
  }),
});

const SKIP_KEY = "invitation-intro-seen";

function Invitation() {
  const [phase, setPhase] = useState<"loading" | "intro" | "site">("loading");

  useEffect(() => {
    const seen = sessionStorage.getItem(SKIP_KEY) === "true";
    const t = window.setTimeout(() => setPhase(seen ? "site" : "intro"), 1000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "site" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const enter = () => {
    sessionStorage.setItem(SKIP_KEY, "true");
    setPhase("site");
  };

  return (
    <>
      <AnimatePresence>{phase === "loading" && <Preloader key="pre" />}</AnimatePresence>
      {phase === "intro" && <IntroCurtain onDone={enter} />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "site" ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={phase !== "site"}
      >
        <Navigation />
        <Hero />
        <DateReveal />
        <Events />
        <Countdown />
        <Venue />
        <RSVP />
        <Footer />
        <MobileActions />
      </motion.main>
      <InvitationDownload active={phase === "site"} />
      <HeartTrail />
    </>
  );
}
