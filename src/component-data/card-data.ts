type CardData = {
  title: "Home" | "Projects";
  copy: string;
};

export const CardDatas: { [key: string]: CardData } = {
  home: { title: "Home", copy: "/" },
  projects: { title: "Projects", copy: "/projects" },
};
