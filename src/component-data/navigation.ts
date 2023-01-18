type Navigation = {
  [key: string]: string;
};

export const NavigationData: { [key: string]: Navigation } = {
  parentSection: {
    className: "flex flex-row justify-end gap-3",
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
  // briefCaseParent: {
  //   className: "bg-slate-800 dark-bg-slate-200",
  // },
};
