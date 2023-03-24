export const NEXT_PUBLIC_GA_TRACKING_ID = "G-TN8DYSWBR0";

export const initGA = () => {
  const windowAny = window;
  if (typeof windowAny === "undefined") {
    return;
  }

  windowAny.dataLayer = windowAny.dataLayer || [];

  function gtag(...args) {
    windowAny.dataLayer.push(args);
  }

  gtag("js", new Date());

  gtag("config", NEXT_PUBLIC_GA_TRACKING_ID);
};
