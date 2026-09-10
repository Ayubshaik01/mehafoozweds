import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** grid span on desktop */
  span: string;
};

export const gallery: GalleryImage[] = [
  {
    src: g1,
    alt: "Hands clasped together, adorned with gold bangles and henna, resting on burgundy velvet",
    width: 900,
    height: 1200,
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: g2,
    alt: "Marble archway framed with white roses and lit by brass lanterns at dusk",
    width: 1400,
    height: 900,
    span: "md:col-span-8",
  },
  {
    src: g3,
    alt: "Close detail of gold embroidery and crystal beading on burgundy silk",
    width: 1000,
    height: 1000,
    span: "md:col-span-4",
  },
  {
    src: g4,
    alt: "Candlelit banquet table set with crystal glassware and white roses",
    width: 1400,
    height: 900,
    span: "md:col-span-4",
  },
  {
    src: g5,
    alt: "A veil lit from behind by golden evening light among white blossom",
    width: 900,
    height: 1300,
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: g6,
    alt: "An illuminated palace facade reflected in still water at night",
    width: 1500,
    height: 1000,
    span: "md:col-span-8",
  },
];
