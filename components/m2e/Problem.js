import { useTranslation } from "next-i18next";

export default function Problem() {
  const { t } = useTranslation("m2e-problem");
  return (
    <div className="bg-zinc-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
              problem
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">{t("title")}</span>
          </h2>
          <p className="text-base text-gray-100 md:text-lg">
            {t("title_text1")}
          </p>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-5xl font-semibold tracking-wide uppercase">
              💸
            </p>
            <p className="text-gray-100 inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
              {t("problem_title1")}
            </p>
            <p className="max-w-xs mx-auto mb-2 text-gray-100 text-base">
              {t("problem_text1")}
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-5xl font-semibold tracking-wide uppercase">
              💀
            </p>
            <p className="text-gray-100 inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
              {t("problem_title2")}
            </p>
            <p className="max-w-xs mx-auto mb-2 text-gray-100">
              {t("problem_text2")}
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-5xl font-semibold tracking-wide uppercase">
              🤕
            </p>
            <p className="text-gray-100 inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
              {t("problem_title3")}
            </p>
            <p className="max-w-xs mx-auto mb-2 text-gray-100">
              {t("problem_text3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
