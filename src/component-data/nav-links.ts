type NavLinkData = {
  title?: "Home" | "Projects" | "LinkedIn" | "";
  href: string;
  data?: [];
  linkSectionClassName?: string;
  linkClassName?: string;
  image?: string;
  imgClass?: string;
  ariaLabel: string;
  imageDark?: string;
  socialLinks?: {
    githubLink: "https://www.Github.com/AJstolp";
    github: "GitHub";
    linkedinLink: "https://www.LinkedIn.com/in/anthonyjstolp";
    linkedin: "LinkedIn";
    className: string;
  };
};

export const NavDatas: NavLinkData[] = [
  {
    title: "Home",
    href: "/",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-black hover:underline rounded p-2 flex justify-end text-xl dark:hover:text-amber-400 font-bold tracking-wider",
    ariaLabel: "Get introuduced.",
    data: [],
  },
  {
    title: "Projects",
    href: "/projects",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-black hover:underline rounded p-2 flex justify-end text-xl font-bold tracking-wider dark:hover:text-amber-400",
    data: [],
    ariaLabel: "Take a look at the projects I have worked on.",
  },
  {
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
