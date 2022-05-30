import React from "react";
import acropolLogo from "../assets/acropol-logo.jpeg";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div class="sm:flex sm:items-center sm:justify-center">
        <a href="http://www.acropol.gr/" class="flex items-center mb-4 sm:mb-0">
          <img
            src={acropolLogo}
            class="mr-3 h-10"
            alt="Acropol Hotel Logo"
            width="40px"
            height="40px"
          />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Fire Safety
            </a>
          </li>
          <li>
            <a
              href="https://acropol-menu.netlify.app/"
              class="mr-4 hover:underline md:mr-6"
              target="_blank"
            >
              Restaurant Menu
            </a>
          </li>
          <li className="mr-3">+30 210 68 26 650</li>
          <li>
            <a href="mailto: info@acropol.gr" class="hover:underline">
              info@acropol.gr
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Acropol Hotel™ . All Rights Reserved.
      </span>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Designed & Developed by{" "}
        <a
          href="https://belowthefold.gr"
          class=" text-red-700 font-bold hover:underline"
        >
          Below The Fold
        </a>
      </span>
    </footer>
  );
};

export default Footer;
