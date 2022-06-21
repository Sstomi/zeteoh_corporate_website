import { useTranslation } from "next-i18next";

export default function Merit() {
  const { t } = useTranslation("merit");
  return (
    <div className="bg-BG-color -mt-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
              features
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-ud text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-5xl md:mx-auto">
            {t("why")}
          </h2>
          <p className="text-base text-gray-100 md:text-lg">
            {t("explanation")}
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <p className="text-7xl">☝🏻</p>
            </div>
            <h6 className="mb-3 text-3xl font-bold text-gray-100">
              {t("feature1_title")}
            </h6>
            <p className="mb-3 text-base text-gray-200">{t("feature1_text")}</p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <p className="text-7xl">🔎</p>
            </div>
            <h6 className="mb-3 text-3xl font-bold text-gray-100">
              {t("feature2_title")}
            </h6>
            <p className="mb-3 text-base text-gray-200">{t("feature2_text")}</p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <p className="text-7xl">🤝</p>
            </div>
            <h6 className="mb-3 text-3xl font-bold leading-5 text-gray-100">
              {t("feature3_title")}
            </h6>
            <p className="mb-3 text-base text-gray-200">{t("feature3_text")}</p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <p className="text-7xl">👩🏽‍💻</p>
            </div>
            <h6 className="mb-3 text-3xl font-bold leading-5 text-gray-100">
              {t("feature4_title")}
            </h6>
            <p className="mb-3 text-base text-gray-200">{t("feature4_text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
