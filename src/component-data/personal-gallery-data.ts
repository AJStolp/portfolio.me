import { IGallery } from "@/interfaces/IGallery";

const PersonalGalleryData: IGallery[] = [
  {
    id: 1,
    image: "/assets/projects/shopify.webp",
    ariaLabel:
      "A side project that I have been working on with my cousin. I am the developer and business person he is the designer.",
    alt: "Shopify Storefront",
    projectDescription:
      "This is a collaborative side project between me and my cousin. While my cousin handles the design aspect, I manage the development, analytics, and business aspects. Initially, I planned to build this project using a React Hydrogen application, but I decided to switch to the native Shopify programming language, Liquid, for a new learning experience. The store features a Midwest theme.",
  },
  {
    id: 2,
    image: "/assets/projects/fishing-reports.webp",
    ariaLabel:
      "A side project that I am building for people to share fishing reports. utilizes Mapbox for easy visualization and navigation to your favorite fishing spot.",
    alt: "",
    projectDescription:
      "This is a side project aimed at providing a platform for people to share fishing reports. Born out of frustration with the lack of accessible and readable reports, this project utilizes Mapbox for easy visualization and navigation to your favorite fishing spot. This app will make it easy for users to post fishing reports. The goal is to make fishing reports more accessible and user-friendly.",
  },
  {
    id: 3,
    image: "/assets/projects/gigtor.webp",
    ariaLabel:
      "A side project that I am building for venues and artitst to connect more easily.",
    alt: "Gigtor.com",
    projectDescription:
      "Gigtor is a side project that I have had the pleasure to collaborate on with several people from Europe. At Gigtor, our mission is to improve the way artists and venues work and collaborate together.",
  },
];
export default PersonalGalleryData;
