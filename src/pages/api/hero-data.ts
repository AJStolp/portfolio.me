import { IHero } from "@/interfaces/IHero";
import type { NextApiRequest, NextApiResponse } from "next";

const HeroData: IHero[] = [
  {
    id: 1,
    heading: "My name is Anthony",
    colorName: "Anthony,",
    copy: "I am a Developer. If you're a business seeking a web presence or are looking to hire, contact me here. My portfolio showcases the websites that I have had the opportunity to colloborate on.",
    image: "/assets/portfolio-logo.webp",
    alt: "Technology graphic",
    cta1: "Projects",
    cta2: "Contact Me",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(HeroData);
}
