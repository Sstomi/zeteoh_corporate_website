import { appWithTranslation } from "next-i18next";
import "tailwindcss/tailwind.css";
import Script from "next/script";

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <>
//       <div className="container">
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-EP8V6PRVC6"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){window.dataLayer.push(arguments);}
//             gtag('js', new Date());

//             gtag('config', 'G-EP8V6PRVC6');
//           `}
//         </Script>
//       </div>
//       <Component {...pageProps} />
//     </>
//   );
// };

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
