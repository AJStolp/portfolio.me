export const GA_TRACKING_ID = "G-TN8DYSWBR0";

export const initGA = (): void => {
  const windowAny = window as any;
  if (typeof windowAny === "undefined") {
    return;
  }

  windowAny.dataLayer = windowAny.dataLayer || [];

  function gtag(...args: any[]) {
    windowAny.dataLayer.push(args);
  }

  gtag("js", new Date());

  gtag("config", GA_TRACKING_ID);
};
