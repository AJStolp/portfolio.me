import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID, initGA } from "public/utils/ga";
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
          strategy="beforeInteractive"
        ></Script>
        <Script async src="/utils/ga.ts" strategy="beforeInteractive"></Script>
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
