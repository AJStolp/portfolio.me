import { IGallery } from "@/interfaces/IGallery";
import type { NextApiRequest, NextApiResponse } from "next";
const ProfessionalGalleryData: IGallery[] = [
  {
    id: 1,
    image: "/assets/projects/silo.webp",
    ariaLabel: "I contributed to this project. useSilo.com",
    alt: "useSilo.com",
    projectDescription: "React, NextJs, StyledComponents, TypeScript",
  },
  {
    id: 2,
    image: "/assets/projects/jvl.webp",
    ariaLabel: "I contributed to this project. johnsonville.com",
    alt: "johnsonville.com",
    projectDescription: "Built on the CMS Magnolia, FreeMarker, jQuery, SCSS",
  },
  {
    id: 3,
    image: "/assets/projects/procore.webp",
    ariaLabel: "I contributed to this project. procore.com",
    alt: "procore.com",
    projectDescription:
      "Built on the CMS Magnolia, FreeMarker, JavaScript, SCSS, BootStrap",
  },
  {
    id: 4,
    image: "/assets/projects/dupi.webp",
    ariaLabel: "I contributed to this project. dupixent.com",
    alt: "dupixent.com",
    projectDescription:
      "Built on the CMS Magnolia, jQuery, BootStrap, SCSS, FreeMarker",
  },
  {
    id: 5,
    image: "/assets/projects/ada.webp",
    ariaLabel: "I contributed to this project. diabetes.org/kidney",
    alt: "diabets.org/kidney",
    projectDescription: "React, NextJS, TypeScript, CMS Drupal",
  },
  {
    id: 6,
    image: "/assets/projects/pli.webp",
    ariaLabel: "I contributed to this project. polarlightsimaging.com",
    alt: "polarlightimaging.com",
    projectDescription: "Javascript, BootStrap",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(ProfessionalGalleryData);
}
