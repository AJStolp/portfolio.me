type Navigation = {
  [key: string]: string;
};

export const NavigationData: { [key: string]: Navigation } = {
  parentSection: {
    className: "flex flex-row justify-end gap-12",
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
