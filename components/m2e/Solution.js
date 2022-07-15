import { useTranslation } from "next-i18next";

export default function Solution() {
  const { t } = useTranslation("m2e-solution");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
            solution
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">zeteohRISE</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{t("title_text")}</p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-primary-color hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              {t("solution_title1")}
            </h6>
            <p className="pt-3 text-base text-gray-900">
              {t("solution_text1")}
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-primary-color hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              {t("solution_title2")}
            </h6>
            <p className="pt-3 text-base text-gray-900">
              {t("solution_text2")}
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-primary-color hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              {t("solution_title3")}
            </h6>
            <p className="pt-3 text-base text-gray-900">
              {t("solution_text3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
