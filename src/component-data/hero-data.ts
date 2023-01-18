type HeroData = {
  heading: string;
  copy: string;
  image: string;
  colorName: string;
  cta1: string;
  cta2: string;
};

export const HeroDatas: { [key: string]: HeroData } = {
  hero: {
    heading: "My name is ",
    colorName: "Anthony",
    copy: "I am a Developer. If you're a business seeking a web presence or are looking to hire, contact me here. My portfolio showcases the websites that I have had the opportunity to colloborate on.",
    image: "/assets/hero-img-ajs.webp",
    cta1: "Projects",
    cta2: "Contact Me",
  },
};
