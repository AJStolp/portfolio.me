import { Html, Head, Main, NextScript } from "next/document";
import { initGA } from "public/utils/ga";
import { useEffect } from "react";
import Script from "next/script";

export default function Document() {
  useEffect(() => {
    initGA();
  });
  return (
    <Html lang="en">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="beforeInteractive"
          id=""
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
          strategy="beforeInteractive"
          id=""
        />
      </Head>
      <body className="dark">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNNB8G4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
