/**
 * ============================================================
 *  WEDDING CONFIGURATION — replace every placeholder below
 *  with the real details. Nothing else needs to change.
 * ============================================================
 */

export const wedding = {
  bride: "BRIDE NAME", // ← replace
  groom: "GROOM NAME", // ← replace
  initials: { bride: "B", groom: "G" }, // ← replace (monogram letters)

  /** ISO 8601 with explicit timezone offset — keeps the countdown correct everywhere. */
  dateISO: "2026-12-05T18:30:00+05:30", // ← replace
  dateLabel: "SATURDAY, THE FIFTH OF DECEMBER", // ← replace
  yearLabel: "TWO THOUSAND TWENTY SIX", // ← replace
  timeLabel: "6:30 IN THE EVENING", // ← replace

  venue: "WEDDING VENUE", // ← replace
  venueTagline: "A heritage palace of marble, candlelight and quiet grandeur.",
  address: "VENUE ADDRESS, CITY, STATE", // ← replace
  city: "CITY", // ← replace

  /** Google Maps link (or any map URL) for the “View location” action. */
  mapUrl: "https://www.google.com/maps", // ← replace

  /** Optional ambient track. Drop a file at /public/assets/ambient.mp3 or use a URL. */
  musicUrl: "/assets/ambient.mp3",

  eyebrow: "WITH THE BLESSINGS OF OUR FAMILIES",
  invitation: "invite you to celebrate their wedding",

  story: {
    kicker: "Two paths. One beautiful beginning.",
    paragraphs: [
      "It began the way the best things do — quietly, and entirely by accident. A shared table, a conversation that outlasted the evening, and the particular silence of two people realising they were no longer strangers.",
      "The years that followed were made of ordinary afternoons and extraordinary distances; of letters, of returning, of learning that home is less a place than a person.",
      "Now, surrounded by the people who shaped us, we begin again — together.",
    ],
  },

  closing: {
    line: "With love,",
    blessing: "May the light of this evening stay with you long after the last candle.",
  },

  /** SEO / social sharing */
  seo: {
    title: "BRIDE NAME & GROOM NAME — A Celebration of Love",
    description:
      "With the blessings of our families, we invite you to celebrate our wedding. A cinematic invitation to an evening of candlelight, music and beginnings.",
  },
} as const;

export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  dressCode?: string;
  highlight?: boolean;
};

export const events: WeddingEvent[] = [
  {
    id: "engagement",
    name: "Engagement",
    date: "01 DECEMBER 2026", // ← replace
    time: "7:00 PM",
    venue: "THE ORCHID HALL", // ← replace
    description: "An intimate evening of rings, blessings and the first of many toasts.",
    dressCode: "Formal · Ivory & Gold",
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "03 DECEMBER 2026", // ← replace
    time: "11:00 AM",
    venue: "PALACE GARDEN COURT", // ← replace
    description: "Henna, marigolds and afternoon music beneath the tamarind trees.",
    dressCode: "Daytime Florals",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "04 DECEMBER 2026", // ← replace
    time: "8:00 PM",
    venue: "THE MIRROR BALLROOM", // ← replace
    description: "A night given entirely to music, choreography and unreasonable joy.",
    dressCode: "Cocktail · Jewel Tones",
  },
  {
    id: "wedding",
    name: "The Wedding",
    date: "05 DECEMBER 2026", // ← replace
    time: "6:30 PM",
    venue: "WEDDING VENUE", // ← replace
    description:
      "Seven vows beneath a canopy of jasmine, as the evening turns to candlelight.",
    dressCode: "Traditional Ceremonial",
    highlight: true,
  },
  {
    id: "reception",
    name: "Reception",
    date: "06 DECEMBER 2026", // ← replace
    time: "8:00 PM",
    venue: "THE GRAND TERRACE", // ← replace
    description: "Dinner under the open sky, and the first dance of a married life.",
    dressCode: "Black Tie",
  },
];
