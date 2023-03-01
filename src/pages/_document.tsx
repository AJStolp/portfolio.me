import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID, initGA } from "@/utils/ga";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    initGA();
  });
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script async src="/utils/ga.js"></script>
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
