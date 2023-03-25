export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";

export const initGA = () => {
  console.log("Initializing GA...");
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  }
  gtag("js", new Date());

  gtag("config", "G-M5P52QV0GF");
};

// log specific events happening.
// export const event = ({ action, params }) => {
//   window.gtag('event', action, params)
// }
