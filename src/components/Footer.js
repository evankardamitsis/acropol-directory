import React from "react";
import acropolLogo from "../assets/acropol-logo.jpeg";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-center">
        <a
          href="http://www.acropol.gr/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src={acropolLogo}
            className="mr-3 h-10"
            alt="Acropol Hotel Logo"
            width="40px"
            height="40px"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Modal />
          </li>
          <li className="ml-3">
            <a
              href="https://acropol-menu.netlify.app/"
              className="mr-4 hover:underline md:mr-6"
              target="_blank"
              rel="noreferrer"
            >
              {t("Restaurant Menu")}
            </a>
          </li>
          <li className="mr-3">+30 210 68 26 650</li>
          <li>
            <a href="mailto: info@acropol.gr" className="hover:underline">
              info@acropol.gr
            </a>
          </li>
        </ul>
        <div className="ml-3">
          <button
            className=" p-3 mr-3 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={changeLanguage}
            value="en"
          >
            En
          </button>
          <button
            className=" p-3 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={changeLanguage}
            value="gr"
          >
            Gr
          </button>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Acropol Hotel™ . All Rights Reserved.
      </span>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Designed & Developed by{" "}
        <a
          href="https://belowthefold.gr"
          className=" text-red-700 font-bold hover:underline"
        >
          Below The Fold
        </a>
      </span>
    </footer>
  );
};

export default Footer;
