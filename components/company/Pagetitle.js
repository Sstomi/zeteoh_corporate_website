import { useTranslation } from "next-i18next";

export default function Pagetitle() {
  const { t } = useTranslation("pagetitile");
  return (
    <div className="bg-pagetitile-image bg-no-repeat bg-auto bg-right">
      <div className="px-4 py-40 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl sm:leading-none">
              COMPANY
            </h2>
            <p className="mb-2 text-xs font-semibold tracking-wide text-stone-800 uppercase">
              Breadclumb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
