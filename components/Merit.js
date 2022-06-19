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
              {t('why')}      
          </h2>
          <p className="text-base text-gray-100 md:text-lg">
          {t('explanation')}      
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-3xl font-bold text-gray-100">
            {t('feature1_title')} 
            </h6>
            <p className="mb-3 text-base text-gray-200">
            {t('feature1_text')}
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-3xl font-bold text-gray-100">
            {t('feature2_title')} 
            </h6>
            <p className="mb-3 text-base text-gray-200">{t('feature2_text')}</p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-3xl font-bold leading-5 text-gray-100">
            {t('feature3_title')} 
            </h6>
            <p className="mb-3 text-base text-gray-200">
            {t('feature3_text')}
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="url(#grad1)"
                
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      stopColor="#b794f4"
                      stopOpacity="1"
                    />
                    <stop
                      offset="50%"
                      stopColor="#ed64a6"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="#f64a49"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-3xl font-bold leading-5 text-gray-100">
            {t('feature4_title')} 
            </h6>
            <p className="mb-3 text-base text-gray-200">
            {t('feature4_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
