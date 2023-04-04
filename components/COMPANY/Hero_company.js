import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Hero_company() {
  const { t } = useTranslation("hero_company");
  return (
    <div className="bg-particle-background bg-cover">
      <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col sm:text-center">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-7xl">
              <h2 className="pb-12 max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl md:mx-auto">
                Elevate human potential with the power of AI.
              </h2>
              <p className="pb-4 text-xl font-bold text-gray-100 md:text-2xl">
                {t("sub-title-1")}
              </p>
              <p className="pb-8 text-lg text-gray-100 md:text-lg">
                {t("sub-content-1")}
              </p>
              <p className="pb-4 text-xl font-bold text-gray-100 md:text-2xl">
                {t("sub-title-2")}
              </p>
              <p className="pb-8 text-lg text-gray-100 md:text-lg">
                {t("sub-content-2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
