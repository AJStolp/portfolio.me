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
      "dark:text-white text-slate-100 bg-slate-800 rounded p-2 flex justify-end text-xl dark:hover:text-orange-500 hover:text-orange-500 font-bold tracking-wider",
    ariaLabel: "Get introuduced.",
    data: [],
  },
  {
    title: "Projects",
    href: "/projects",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-slate-100 bg-slate-800 rounded p-2 hover:text-orange-500 flex justify-end text-xl font-bold tracking-wider dark:hover:text-orange-500",
    data: [],
    ariaLabel: "Take a look at the projects I have worked on.",
  },
  {
    title: "",
    image: "/assets/paperclip.svg",
    imgClass: "w-10 rounded p-2",
    href: "",
    linkSectionClassName:
      "flex flex-row items-center rounded bg-slate-400 dark:bg-slate-500 relative",
    ariaLabel: "Checkout my Github and LinkedIn.",
    socialLinks: {
      githubLink: "https://www.Github.com/AJstolp",
      linkedinLink: "https://www.LinkedIn.com/in/anthonyjstolp",
      github: "GitHub",
      className:
        "text-primary p-2 hover:text-white font-bold tracking-wide transform hover:scale-110 hero-name",
      linkedin: "LinkedIn",
    },
  },
  // {
  //   title: "",
  //   image: "/assets/white-paperclip.png",
  //   imgClass: "w-32 rounded",
  //   href: "",
  //   linkSectionClassName: "",
  //   ariaLabel: "Checkout my Github and LinkedIn.",
  // },
];
