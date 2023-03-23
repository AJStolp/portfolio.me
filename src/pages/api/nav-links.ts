import type { NextApiRequest, NextApiResponse } from "next";

type NavLinkData = {
  id: number | string;
  title: "Home" | "Projects" | "LinkedIn" | "";
  href: string;
  linkSectionClassName: string;
  linkClassName?: string;
  image?: string;
  imgClass?: string;
  ariaLabel: string;
  socialLinks?: {
    githubLink: "https://www.Github.com/AJstolp";
    github: "GitHub";
    linkedinLink: "https://www.LinkedIn.com/in/anthonyjstolp";
    linkedin: "LinkedIn";
    className: string;
  };
};

const NavDatas: NavLinkData[] = [
  {
    id: "e6aeef26-ba8e-4b7e-bb6f-03bb3c652f22",
    title: "Home",
    href: "/",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-black hover:underline rounded p-2 flex justify-end text-xl dark:hover:text-amber-400 font-bold tracking-wider",
    ariaLabel: "Get introuduced.",
  },
  {
    id: "4a3b0525-ed45-45ff-9c65-b65d8b8a30bd",
    title: "Projects",
    href: "/projects",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-black hover:underline rounded p-2 flex justify-end text-xl font-bold tracking-wider dark:hover:text-amber-400",
    ariaLabel: "Take a look at the projects I have worked on.",
  },
  {
    id: "d64e46b5-979a-4d22-8ad4-cda26f227788",
    title: "",
    image: "/assets/paperclip.svg",
    imgClass: "w-10 rounded p-2",
    href: "",
    linkSectionClassName:
      "flex flex-row items-center rounded bg-white text-white relative",
    ariaLabel: "Checkout my Github and LinkedIn.",
    socialLinks: {
      githubLink: "https://www.Github.com/AJstolp",
      linkedinLink: "https://www.LinkedIn.com/in/anthonyjstolp",
      github: "GitHub",
      className:
        "text-black hover:underline p-2 font-bold tracking-wide transform hover:scale-110 hero-name",
      linkedin: "LinkedIn",
    },
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(NavDatas);
}
