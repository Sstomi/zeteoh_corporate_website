import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <div className="mb-8">
      <div className="bg-BG-image pt-24 lg:pt-4">
        <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="font-test max-w-xl mb-6 font-ud text-5xl font-bold leading-none tracking-tight text-gray-100 sm:text-7xl md:mx-auto">
            {t('main-title')} 
            </h1>
            <p className="pt-8 font-test font-bold text-base text-gray-100 md:text-lg">
              {t('introduction')} 
            </p>
          </div>
        </div>
      </div>
      <div className="bg-BG-color relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-BG-image h-1/2" />
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-2">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"></div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="px-10 py-20 text-center transition duration-300 transform bg-zinc-900 rounded shadow-[30px_15px_15px_15_px_rgba(246, 74, 73, 1)] hover:scale-105 md:shadow-[30px_15px_15px_15_px_rgba(246, 74, 73, 1,0)] md:shadow-orange-800/40 hover:shadow-2xl">
              <p className="font-semibold text-gray-200"> {t('mobilegame')} </p>
              <p className="font-semibold text-gray-200 hover:text-primary-color">
                Coming soon
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-zinc-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">{t('web3.0')}</p>
              <p className="font-semibold text-gray-200 hover:text-primary-color">
                Coming soon
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-zinc-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">{t('wellbeing')}</p>
              <p className="font-semibold text-gray-200 hover:text-primary-color">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
