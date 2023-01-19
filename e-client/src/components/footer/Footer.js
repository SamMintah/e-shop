import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/icon-user.svg"
import pay from "../assets/pay.png"

function Footer() {
  return (
    // <footer className="p-4 bg-[#ffffff] sm:p-6 font-second">
    //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //   <div className="md:flex md:justify-between border-black">
    //     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">
    //           Info
    //         </h2>
    //         <ul className="text-gray-600 dark:text-gray-900">
    //           <li className="mb-4">
    //             <Link to={"/contactus"}>Contact Us</Link>
    //           </li>
    //           <li className="mb-4">Shipping</li>
    //           <li className="mb-4">FAQ</li>
    //           <li className="mb-4">Return Policy</li>
    //           <li className="mb-4">Privacy Policy</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mr-[10%]">
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">
    //           Socials
    //         </h2>
    //         <div className="mt-11 pr-9 ">
    //           <ul className="text-gray-600 dark:text-gray-400 inline-flex gap-4 pr-11">
    //             <li className="mb-4">
    //               <a href="">
    //                 <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
    //                   <FaWhatsapp size={20} color="black" />
    //                 </button>
    //               </a>
    //             </li>
    //             <li className="mb-4">
    //               <a href="https://www.instagram.com/mars.retail/">
    //                 <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
    //                   <AiOutlineInstagram size={20} color="black" />
    //                 </button>
    //               </a>
    //             </li>
    //             <li className="mb-4">
    //               <a href="https://twitter.com/mars">
    //                 <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
    //                   <BsTwitter size={20} color="black" />
    //                 </button>
    //               </a>
    //             </li>
    //             <li className="mb-4">
    //               <a href="https://www.tiktok.com/@mars.retailcdv">
    //                 <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
    //                   <TbBrandTiktok size={20} color="black" />
    //                 </button>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //   <div>
    //     <div className="flex justify-center items-center ">
    //       <div>
    //         <h3>Payment Method</h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center ">
    //     <img src={pay} />
    //   </div>
    //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //   <div className="flex items-center justify-center sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center">
    //     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-900">
    //       © 2022{" "}
    //       <a href="https://flowbite.com/" className="hover:underline">
    //         Mars™
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>
    
<footer className="p-4 bg-white sm:p-5 dark:bg-[black] font-second">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src={logo} className="mr-3 h-8" alt="Logo" />
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
         <img src={pay} />
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


