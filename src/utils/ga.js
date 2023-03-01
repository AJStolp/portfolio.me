export const GA_TRACKING_ID = "G-TN8DYSWBR0";

export const initGA = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", GA_TRACKING_ID);
};
