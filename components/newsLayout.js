import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "next-i18next";

const name = "News";
export const siteTitle = "zeteoh株式会社";

export default function NewsLayout({ children, home }) {
  const { t } = useTranslation("news_list");

  return (
    <div className="bg-gray-300 ">
      <div className="">
        <Navbar />
        <div className="">
          <header>
            {home ? (
              <div className="text-center">
                <Image
                  priority
                  src="/images/profile.png"
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className="text-2xl font-bold text-center">{name}</h1>
              </div>
            ) : (
              <></>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className="text-center pb-16">
              <Link href="/news">
                <a className="text-gray-900 hover:text-gray-600">
                  {t("back-to-news-list")}
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
