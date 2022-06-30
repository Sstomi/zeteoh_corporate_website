import { appWithTranslation } from "next-i18next";
import "tailwindcss/tailwind.css";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <div className="container">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MG626T9NVD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MG626T9NVD');
          `}
        </Script>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
