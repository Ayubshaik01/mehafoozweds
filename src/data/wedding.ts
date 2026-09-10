/**
 * ============================================================
 *  WEDDING CONFIGURATION — details taken from the printed
 *  invitation card (SSA-FINAL).
 * ============================================================
 */

export const wedding = {
  bride: "Syed Sadiya Ahamed",
  groom: "Shaik Saleem",
  initials: { bride: "S", groom: "S" },

  /** Nikah — ISO 8601 with explicit timezone offset. */
  dateISO: "2026-09-27T11:30:00+05:30",
  dateLabel: "SUNDAY, THE TWENTY-SEVENTH OF SEPTEMBER",
  yearLabel: "TWO THOUSAND TWENTY SIX",
  timeLabel: "11:30 IN THE MORNING",

  venue: "SAI SRINIVASA GARDEN",
  venueTagline: "Where our families gather to witness the nikah.",
  address: "Madras Road, Chinna Chowk, Kadapa 516002",
  city: "KADAPA",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Sai+Srinivasa+Garden+Madras+Road+Chinna+Chowk+Kadapa+516002",

  /** Optional ambient track. Drop a file at /public/assets/ambient.mp3 or use a URL. */
  musicUrl: "/assets/ambient.mp3",

  bismillah: "In the name of Allah, the Most Gracious, the Most Merciful",
  eyebrow: "WITH IMMENSE JOY AND GRATITUDE TO THE ALMIGHTY",
  invitation: "invite you to bless and celebrate the wedding of",

  hosts: {
    line: "Mrs & Mr",
    name: "Syed Imtiaz Ahamed",
    qualification: "B.A.",
    role: "Dy. Asst. Commissioner of State Tax, O/O Asst. Commissioner, Chittoor-2 Circle, Chittoor",
    address: "D.No 11-785, Habeebullah Street, Kadapa",
    phones: ["9703003073", "7799226291"],
    relation: "our youngest daughter",
  },

  groomDetails: {
    qualification: "Chartered Accountant · Company Secretary (Prof.)",
    lineage: "Second son of Shaik Mohiddin (Late)",
    notes: [
      "Ex-Member of Urdu Ghar Islamic Committee, Vempalli",
      "Pro: Madeena-Al-Munwara Sawmill, Vempalli",
    ],
  },

  note: "PLEASE AVOID PRESENTATIONS",
  wishesFrom: "With best wishes: Syed Abdul Mazeed's Family",

  story: {
    kicker: "Two families. One blessed beginning.",
    paragraphs: [
      "With immense joy and gratitude to the Almighty, our families come together to celebrate a union written long before we knew it.",
      "Three days of prayer, feasting and togetherness — Shukrana in Kadapa, the Nikah at Sai Srinivasa Garden, and the Valima at Vempalli.",
      "We request the honour of your presence and blessings as we embark on this beautiful journey of togetherness.",
    ],
  },

  closing: {
    line: "With best wishes,",
    blessing:
      "May Allah bless this union with love, mercy and lasting happiness.",
  },

  /** SEO / social sharing */
  seo: {
    title: "Syed Sadiya Ahamed & Shaik Saleem — Wedding Invitation",
    description:
      "Join us for the Shukrana, Nikah and Valima of Syed Sadiya Ahamed and Shaik Saleem, 26–29 September 2026, Kadapa & Vempalli.",
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
    date: "SATURDAY, 26 SEPTEMBER 2026",
    time: "8:00 PM",
    venue: "Sai Srinivasa Garden, Madras Road, Chinna Chowk, Kadapa 516002",
    description: "An evening of thanksgiving as the celebrations begin.",
  },
  {
    id: "nikah",
    name: "Nikah",
    date: "SUNDAY, 27 SEPTEMBER 2026",
    time: "SHARP AT 11:30 AM",
    venue: "Sai Srinivasa Garden, Madras Road, Chinna Chowk, Kadapa 516002",
    description: "The solemnisation of the marriage. Lunch follows at 12:30 PM.",
    highlight: true,
  },
  {
    id: "valima",
    name: "Valima",
    date: "TUESDAY, 29 SEPTEMBER 2026",
    time: "LUNCH AT 1:00 PM",
    venue:
      "Madhu Reddy Convention Hall, Kadapa Circle, Vempalli Bypass Road, Vempalli 516329",
    description: "The wedding feast hosted by the groom's family.",
  },
];
