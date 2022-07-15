import { useTranslation } from "next-i18next";

export default function Problem() {
  const { t } = useTranslation("problem");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
            problem
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            Developing and operating an M2E app is complex and involves physical
            activitiy detection, privacy concerns and strong anti-cheating
            solutions.
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          This can represent more than half of your development costs.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            💸
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
            Cheating
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700 text-base">
            Cheaters are a threat for your business. And developing anti-cheat
            solutions requires a very specific expertise and a lot of resources.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            💀
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
            Privacy
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Geolocation solutions like the GPS to track users' physical
            activities are easy to implement but bring a lot of privacy and
            regulatory concerns.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            🤕
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
            Usability
            <br></br>
            <br></br>
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Geolocation solutions consume a lot of battery and forces a lot of
            your users' to exercise with their smartphone and an additional
            battery.
          </p>
        </div>
      </div>
    </div>
  );
}
