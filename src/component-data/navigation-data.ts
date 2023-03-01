type Navigation = {
  [key: string]: string;
};

export const NavigationData: { [key: string]: Navigation } = {
  parentSection: {
    className:
      "flex flex-row flex-wrap justify-end gap-4 items-center group z-10 bg-white dark:bg-black rounded",
  },
  button: {
    btnClassName: "",
  },
  closedMenu: {
    className: "",
    alt: "hamburger menu",
  },
  openMenu: {
    className: "",
    alt: "close x",
  },
};
