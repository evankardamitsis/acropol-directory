import React from "react";
import acropolHero from "../assets/acropol-hero.jpeg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t("ACROPOL HOTEL")}</span>{" "}
                <span className="block text-red-700 xl:inline">
                  {t("Hotel Directory")}
                </span>
              </h1>
              {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Dear Guests, <br />
                We are delighted to welcome you to{" "}
                <strong>ACROPOL HOTEL</strong> and we wish you a pleasant stay!
                <br></br>
                Our main priority is to make your feel like home! <br></br> In
                this Directory you may find all the useful information about our
                facilities and services available. <br></br>Enjoy your stay !
              </p> */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={changeLanguage}
                    value="en"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                  >
                    English
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={changeLanguage}
                    value="gr"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    Ελληνικά
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={acropolHero}
          alt="acropol hotel reception"
        />
      </div>
    </div>
  );
};

export default Hero;
