type NavLinkData = {
  title?: "Home" | "Projects" | "LinkedIn" | "";
  href: string;
  data?: [];
  linkSectionClassName?: string;
  linkClassName?: string;
  image?: string;
  imgClass?: string;
  ariaLabel: string;
};

export const NavDatas: NavLinkData[] = [
  {
    title: "Home",
    href: "/",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-slate-800 flex justify-end text-xl dark:hover:text-orange-500 hover:text-orange-500 font-bold tracking-wider",
    ariaLabel: "Get introuduced.",
    data: [],
  },
  {
    title: "Projects",
    href: "/projects",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-slate-800 hover:text-orange-500 flex justify-end text-xl font-bold tracking-wider dark:hover:text-orange-500",
    data: [],
    ariaLabel: "Take a look at the projects I have worked on.",
  },
  {
    title: "",
    image: "/assets/briefcase.webp",
    imgClass: "w-8",
    href: "",
    linkSectionClassName: "",
    ariaLabel: "Checkout my Github and LinkedIn.",
  },
];
