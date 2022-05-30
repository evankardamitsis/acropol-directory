import React from "react";
import acropolLogo from "../assets/acropol-logo.jpeg";
import Modal from "./Modal";

const Footer = () => {
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
          <li>
            <a
              href="https://acropol-menu.netlify.app/"
              className="mr-4 hover:underline md:mr-6"
              target="_blank"
              rel="noreferrer"
            >
              Restaurant Menu
            </a>
          </li>
          <li className="mr-3">+30 210 68 26 650</li>
          <li>
            <a href="mailto: info@acropol.gr" className="hover:underline">
              info@acropol.gr
            </a>
          </li>
        </ul>
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
