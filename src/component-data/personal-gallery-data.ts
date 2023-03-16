import { IGallery } from "@/interfaces/IGallery";

const PersonalGalleryData: IGallery[] = [
  {
    id: 1,
    image: "/assets/projects/shopify.webp",
    ariaLabel:
      "A side project that I have been working on with my cousin. I am the developer and business person he is the designer.",
    alt: "Shopify Storefront",
    projectDescription: "Liquid, SCSS",
  },
  {
    id: 2,
    image: "/assets/projects/fishing-reports.webp",
    ariaLabel:
      "A side project that I am building for people to share fishing reports. utilizes Mapbox for easy visualization and navigation to your favorite fishing spot.",
    alt: "",
    projectDescription: "React, NextJS, TailwindCSS, TypeScript",
  },
  {
    id: 3,
    image: "/assets/projects/gigtor.webp",
    ariaLabel:
      "A side project that I am building for venues and artitst to connect more easily.",
    alt: "Gigtor.com",
    projectDescription: "React, SCSS, Firebase",
  },
];
export default PersonalGalleryData;
