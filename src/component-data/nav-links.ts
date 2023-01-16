type NavData = {
  title: "Home" | "Contact" | "Projects";
  href: string;
};

export const NavDatas: { [key: string]: NavData } = {
  home: { title: "Home", href: "/" },
  projects: { title: "Projects", href: "/projects" },
  contact: { title: "Contact", href: "/contact" },
};
