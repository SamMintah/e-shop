import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Icon from '../assets/icon-user.svg';

import { Link } from "react-router-dom";

export default function Nav2() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="dark:bg-[#e8c3d1] py-0 sticky top-0 z-50 bg-[white]">
      <div className="bg-[black] text-[white] h-10 text-[12px] flex justify-center items-center font-second ">
        <h3>30% OFF ALL ORDERS !!</h3>
      </div>
      <div className="2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4">
        <div className="flex items-center justify-between">
          <div className="lg:w-3/12">
            <div className="w-7/12 hidden lg:flex items-center space-x-3 border-b border-gray-200 pb-2">
              <div>
                <HiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="bg-transparent text-sm text-gray-600 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowMenu(true)}
              aria-label="Open Menu"
              className="text-gray-800 dark:text-[black] hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
            >
              <HiMenuAlt3 size={20}  />
            </button>
            <button
              onClick={() => setSearch(true)}
              aria-label="Search Menu"
              className="text-gray-800 dark:text-[black] md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
            >
              <HiSearch size={20}/>
            </button>
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center items-center space-y-3.5">
            <div role="img" className="cursor-pointer">
              <Link to={"./"} className="flex items-center space-x-3.5">
            <img className="w-12 h-12 rounded-full" src={Icon} width="32" height="32" alt="User" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"> E-shop</span>  
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-10">
                <li>
                  <Link
                    to={"./"}
                    className="dark:text-[black] dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"./checkout"}
                    className="dark:text-[black] dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"./Products"}
                    className="dark:text-[black] dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"./Faq"}
                    className="dark:text-[black] dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    to={"./"}
                    className="dark:text-[black] dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-3/12 flex justify-end items-center space-x-4">
            <Link
              className="hidden md:block focus:outline-none text-gray-800 dark:text-[black] focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
              to={"./Favorite"}
            >
              <MdFavoriteBorder size={30}  />
            </Link>
            <Link
              className="hidden md:block focus:outline-none text-gray-800 dark:text-[black] focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
              to={"./Cart"}
            >
              <FiShoppingBag size={30} />
            </Link>
            <button
              onClick={() => setShowMenuSm(true)}
              aria-label="open menu"
              className="text-gray-800 dark:text-[black] md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
            >
              <HiMenuAlt3 size={20} />
            </button>
          </div>
        </div>
        <div
          id="md-menu"
          className={`${
            showMenu ? "md:block" : ""
          } hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}
        >
          <div className="relative w-full h-screen">
            <div className="absolute inset-0 w-1/2 bg-[black] dark:bg-gray-900 p-6 justify-center">
              <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mx-2">
                  <HiSearch size={20} color="white" />
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <IoMdClose size={20} color="white" />
                </button>
              </div>
              <div className="mt-8">
                <ul className="flex flex-col space-y-8">
                  <li className="flex items-center justify-between">
                    <Link
                      onClick={() => setShowMenu(false)}
                      to={"./"}
                      className="dark:text-[white] text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <Link
                      onClick={() => setShowMenu(false)}
                      to={"./"}
                      className="dark:text-[white] text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Catalog
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <Link
                      onClick={() => setShowMenu(false)}
                      to={"./Products"}
                      className="dark:text-[white] text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <Link
                      to={"./Faq"}
                      className="dark:text-[white] text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Faq
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <Link
                      to={"./"}
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Search menu */}
        <div
          id="mobile-search-menu"
          className={`${
            search ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-[white] dark:bg-gray-900 pt-4`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mx-4">
              <div className="flex items-center space-x-3 mx-2">
                <HiSearch size={20} color="white" />
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm text-white focus:outline-none bg-transparent"
                />
              </div>
              <button
                aria-label="close menu"
                onClick={() => setSearch(false)}
                className="text-gray-800 dark:text-[white] focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <IoMdClose size={20} />
              </button>
            </div>
          </div>
          <div className="mt-8 mx-4">
            <h2 className="text-sm text-gray-600 dark:text-gray-300 uppercase">
              Suggestions
            </h2>
            <ul className="mt-6 flex flex-col space-y-6">
              <li className="flex items-center justify-between">
                <Link
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-[white] focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Denim 2021
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <Link
                  onClick={() => setSearch(false)}
                  className="flex items-center space-x-2 text-gray-800 dark:text-[white] focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  to={"./Cart"}
                >
                  <FiShoppingBag size={20} color="white" />
                  <p className="text-base">Cart</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSearch(false)}
                  className="flex items-center space-x-2 text-gray-800 dark:text-[white] focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  to={"./Favorite"}
                >
                  <MdFavoriteBorder size={20} color="white" />
                  <p className="text-base">Wishlist</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Main Menu */}
        <div
          id="mobile-menu"
          className={`${
            showMenuSm ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-[black] pt-4`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mx-4">
              <div />
              <div>
                <p className="text-base font-semibold text-gray-100">Menu</p>
              </div>
              <button
                aria-label="close menu"
                onClick={() => setShowMenuSm(false)}
                className="text-gray-800 dark:text-[white] focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <IoMdClose size={20} />
              </button>
            </div>
          </div>
          <div className="mt-6 mx-4">
            <ul className="flex flex-col space-y-8">
              <li className="flex items-center justify-between">
                <Link
                  onClick={() => setShowMenuSm(false)}
                  to={"./"}
                  className="text-base text-gray-800 focus:outline-none dark:text-[white] focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link
                  onClick={() => setShowMenuSm(false)}
                  to={"./Checkout"}
                  className="text-base text-gray-800 focus:outline-none dark:text-[white] focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Catalog
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link
                  onClick={() => setShowMenuSm(false)}
                  to={"./Products"}
                  className="text-base text-gray-800 focus:outline-none dark:text-[white] focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Products
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link
                  onClick={() => setShowMenuSm(false)}
                  to={"./Faq"}
                  className="text-base text-gray-800 focus:outline-none dark:text-[white] focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Faq
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link
                  onClick={() => setShowMenuSm(false)}
                  to={"./"}
                  className="text-base text-gray-800 focus:outline-none dark:text-[white] focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <Link
                  onClick={() => setShowMenuSm(false)}
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  to={"./Cart"}
                >
                  <FiShoppingBag size={20} color="white" />
                  <p className="text-base text-white">Cart</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowMenuSm(false)}
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  to={"./Favorite"}
                >
                  <MdFavoriteBorder size={20} color="white" />
                  <p className="text-base text-white">Wishlist</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
