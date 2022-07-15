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
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">zeteohRISE</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We support your business and enable you to strive in the M2E market.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Advanced Anti-Cheats
            </h6>
            <p className="text-sm text-gray-900">
              We use our expertise and Ai models to prevent and detect cheaters.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Privacy by design</h6>
            <p className="text-sm text-gray-900">
              We enable you to detect physical activities without the GPS. This
              means no privacy issues anymore and a better user experience for
              your app.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">More activities</h6>
            <p className="text-sm text-gray-900">
              Add more activities to your app to reach more users in the world.
            </p>
          </div>
        </div>
      </div>
      ========== Explanation about how it's easy to start with a clear plan
      about how they will implement it and button to top down about contact
      <br></br>
      ========== The result with our solution and without<br></br>
      ========== contact specific componenent for this page<br></br>
    </div>
  );
}
