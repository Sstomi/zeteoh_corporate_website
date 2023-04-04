import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const { t } = useTranslation("hero_TRAILS");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="bg-BG-color py-12">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      >
        <div className="flex flex-col justify-between max-w-xl px-4 py-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
          <div className="pt-16 mb-16 lg:mb-0 lg:pt-8 lg:max-w-xl lg:pr-5">
            <div className="max-w-7xl mb-6">
              <h1 className="max-w-2xl mb-6 font-sans text-4xl font-bold leading-none text-white sm:text-6xl md:mx-auto">
                {t("main-title-1")}
                <br></br>
                {t("main-title-2")}
                <br></br>
                {t("main-title-3")}
              </h1>
              <p className="text-base text-gray-100 md:text-lg">
                {t("sub-1")}
                <br></br>
                {t("sub-2")}
                <br></br>
                {t("sub-3")}
              </p>
            </div>
            <div className="flex items-center">
              <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-color hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
                {t("button_meeting")}
              </a>
              <Link href="/#contact-us">
                <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-white hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
                  {t("button_contact")}
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:pt-8">
            <Image
              className=""
              src="/images/hero-top.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1600} // Desired size with correct aspect ratio
              alt="TRAILS_image"
            />
          </div>
        </div>
      </Particles>
    </div>
  );
}
