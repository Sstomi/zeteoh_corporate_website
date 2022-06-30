import { appWithTranslation } from "next-i18next";
import "tailwindcss/tailwind.css";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

const MyApp = ({ Component, pageProps }) => {
  usePageViews();
  return (
    <>
      <div className="container">
        <GoogleAnalytics />
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
