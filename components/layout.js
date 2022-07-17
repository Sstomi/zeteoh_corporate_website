import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const name = "ニュース";
export const siteTitle = "zeteoh株式会社";

export default function Layout({ children, home }) {
  return (
    <div className="bg-gray-300 ">
      <div className="pt-8">
      <Navbar />
        <div>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="プレスリリース・プロダクトに関するニュース・その他のお知らせ"
            />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <header>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1>{name}</h1>
              </>
            ) : (
              <></>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className="text-center pb-16">
              <Link href="/#last-news">
                <a className="text-gray-900 hover:text-gray-600">
                  👈 ホームへ戻る
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
