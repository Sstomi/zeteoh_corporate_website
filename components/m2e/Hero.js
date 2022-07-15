import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("m2e-hero");
  return (
    <div className="bg-BG-color">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto">
                <span className="relative inline-block">
                  Save development costs for your <br></br>Move to Earn app
                </span>{" "}
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                We help M2E businesses reducing their development and operation
                costs with our solution zeteohRISE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
