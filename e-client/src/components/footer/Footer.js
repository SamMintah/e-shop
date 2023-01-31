import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    
<footer className="p-4 bg-white sm:p-5 dark:bg-[black] font-second">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="./img/icon-user.svg" className="mr-3 h-8" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-shop</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://flowbite.com/" className="hover:underline">E_shop</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" className="hover:underline">Skincare</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="flex justify-center items-center">
            <h3 className="text-gray-200 m-2">Payment Method</h3>
    </div>
    <div className="flex justify-center items-center ">
         <img src="./img/pay.png" />
      </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">E-SHOP™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:items-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <AiOutlineInstagram/>
            <span className="sr-only">Instagram page</span>
            </a>
        </div>
    </div>
</footer>

  );
}

export default Footer;


