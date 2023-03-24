import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID, initGA } from "@/utils/ga";
import { useEffect } from "react";
import Script from "next/script";

export default function Document() {
  useEffect(() => {
    initGA();
  });
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></Script>
        <Script async src="https://www.anthonystolp.dev/utils/ga.js"></Script>
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
