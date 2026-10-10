/**
 * ============================================================
 *  WEDDING CONFIGURATION — details taken from the printed
 *  invitation card for K.S. Mohammed Mehafooz & Noor-e-Ayen.
 * ============================================================
 */

export const wedding = {
  groom: "K.S. Mohammed Mehafooz",
  bride: "Noor-e-Ayen",
  initials: { groom: "M", bride: "N", first: "M", second: "N" },

  /** Nikah — ISO 8601 with explicit timezone offset. */
  dateISO: "2026-10-16T10:30:00+05:30",
  dateLabel: "FRIDAY, THE SIXTEENTH OF OCTOBER",
  yearLabel: "TWO THOUSAND TWENTY SIX",
  timeLabel: "10:30 IN THE MORNING",

  venue: "B.M.M FUNCTION HALL",
  venueTagline: "Where our families gather to witness the nikah and celebrate together.",
  address: "Vasavi Circle, Yerragunta Bypass Road, Proddatur",
  city: "PRODDATUR",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=BMM+Function+Hall+Vasavi+Circle+Yerragunta+Bypass+Road+Proddatur",

  /** Reception venues — one per celebration location. */
  venues: [
    {
      id: "shukrana",
      label: "Shukrana Ceremony",
      name: "B.M.M FUNCTION HALL",
      address: "Vasavi Circle, Yerragunta Bypass Road, Proddatur, Andhra Pradesh",
      detail: "Thursday, 15 October 2026 at 8:30 PM",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=BMM+Function+Hall+Vasavi+Circle+Yerragunta+Bypass+Road+Proddatur",
    },
    {
      id: "nikah-valima",
      label: "Nikah & Valima",
      name: "B.M.M FUNCTION HALL",
      address: "Vasavi Circle, Yerragunta Bypass Road, Proddatur, Andhra Pradesh",
      detail: "Friday, 16 October 2026 · Nikah at 10:30 AM · Lunch follows",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=BMM+Function+Hall+Vasavi+Circle+Yerragunta+Bypass+Road+Proddatur",
    },
  ],

  /** Optional ambient track. Drop a file at /public/assets/ambient.mp3 or use a URL. */
  musicUrl: "/assets/ambient.mp3",

  bismillah: "In the name of Allah, The most beneficent and merciful",
  eyebrow: "IN THE NAME OF ALLAH, THE MOST BENEFICENT AND MERCIFUL",
  invitation:
    "solicits your gracious presence on the auspicious occasion of the marriage ceremony of his son",

  blessings: "Late Mrs. & Mr. K.S. Ghouse Peer Sahab",

  hosts: {
    line: "Cordially Invites You",
    name: "Mr. K.S. Nayab Rasool",
    qualification: "",
    role: "Solicits your gracious presence on the auspicious occasion of the marriage ceremony of his son",
    address: "Proddatur, Andhra Pradesh",
    phones: ["9703003073"],
    relation: "his son",
  },

  groomDetails: {
    name: "K.S. Mohammed Mehafooz",
    qualification: "B.Com Computers",
    relation: "Son of Mr. K.S. Nayab Rasool",
  },

  brideDetails: {
    name: "Noor-e-Ayen",
    parentage: "D/o. Mr. K.S. Khader Basha Sahab",
    note: "Gold Smith Proddatur",
  },

  note: "",
  wishesFrom: "With best compliments from : Near & Dear",

  story: {
    kicker: "Two families. One blessed beginning.",
    paragraphs: [
      "In the name of Allah, the Most Beneficent and Merciful.",
      "With the blessings of Late Mrs. & Mr. K.S. Ghouse Peer Sahab and our elders, we invite you to celebrate this blessed milestone.",
      "Join us for the Shukrana, Nikah & Valima of K.S. Mohammed Mehafooz and Noor-e-Ayen at B.M.M Function Hall, Proddatur.",
    ],
  },

  closing: {
    line: "With best compliments from:",
    blessing:
      "May Allah bless this union with endless love, peace, and prosperity.",
  },

  /** SEO / social sharing */
  seo: {
    title: "K.S. Mohammed Mehafooz & Noor-e-Ayen — Wedding Invitation",
    description:
      "Join us for the Shukrana, Nikah and Valima of K.S. Mohammed Mehafooz and Noor-e-Ayen, 15–16 October 2026, B.M.M Function Hall, Proddatur.",
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
    id: "shukrana",
    name: "Shukrana",
    date: "THURSDAY, 15 OCTOBER 2026",
    time: "8:30 PM",
    venue: "B.M.M Function Hall, Vasavi Circle, Yerragunta Bypass Road, Proddatur",
    description: "An auspicious evening of prayer and thanksgiving as our celebrations commence.",
  },
  {
    id: "nikah-valima",
    name: "Nikah & Valima",
    date: "FRIDAY, 16 OCTOBER 2026",
    time: "NIKAH AT 10:30 AM · LUNCH FOLLOWS",
    venue: "B.M.M Function Hall, Vasavi Circle, Yerragunta Bypass Road, Proddatur",
    description: "The sacred solemnisation of Nikah followed by the grand Valima feast.",
    highlight: true,
  },
];
