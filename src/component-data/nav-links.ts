type NavLinkData = {
  title?: "Home" | "Projects";
  href: string;
  data?: [];
  linkSectionClassName: string;
  linkClassName?: string;
};

export const NavDatas: NavLinkData[] = [
  {
    title: "Home",
    href: "/",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-slate-800 flex justify-end text-xl dark:hover:text-orange-500 hover:text-orange-500 font-bold tracking-wider",
    data: [],
  },
  {
    title: "Projects",
    href: "/projects",
    linkSectionClassName: "",
    linkClassName:
      "dark:text-white text-slate-800 hover:text-orange-500 flex justify-end text-xl font-bold tracking-wider dark:hover:text-orange-500",
    data: [],
  },
];
