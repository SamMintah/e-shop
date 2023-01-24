import React from "react";
import prod1 from "../assets/prod1.jpg";
import prod2 from "../assets/prod2.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import prod5 from "../assets/prod5.jpg";
import homeban from "../assets/homeban.png"
import { Link } from "react-router-dom";


function Carousels() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-12">
            <div className="lg:flex justify-center gap-8 items-stretch">
              <div>
                <img
                  src={homeban}
                  alt="headfons"
                  className="w-[750px] object-fill h-full m-0 lg:block md:hidden block"
                />
                <img
                  src={homeban}
                  alt="headfons_bg"
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div className="mt-4">
                <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-gray-800">
                Beauty, cosmetic & personal care
                </p>
                <div className="flex md:gap-5 gap-5 mt-10">
                  <img
                    src={prod1}
                    alt="earbuds"
                    className="md:block hidden w-20 h-20"
                  />
                  <img
                    src={prod1}
                    alt="earbuds_sm"
                    className="lg:hidden md:hidden block w-12 h-12"
                  />
                  <img
                    src={prod2}
                    alt="earbuds"
                    className="md:block hidden w-20 h-20"
                  />
                  <img
                    src={prod2}
                    alt="earbuds_sm"
                    className="lg:hidden md:hidden block w-12 h-12"
                  />
                    <img
                    src={prod3}
                    alt="earbuds"
                    className="md:block hidden w-20 h-20"
                  />
                  <img
                    src={prod3}
                    alt="earbuds_sm"
                    className="lg:hidden md:hidden block w-12 h-12"
                  />
                    <img
                    src={prod4}
                    alt="earbuds"
                    className="md:block hidden w-20 h-20"
                  />
                  <img
                    src={prod4}
                    alt="earbuds_sm"
                    className="lg:hidden md:hidden block w-12 h-12"
                  />
                   <img
                    src={prod5}
                    alt="earbuds"
                    className="md:block hidden w-20 h-20"
                  />
                   <img
                    src={prod5}
                    alt="earbuds_sm"
                    className="lg:hidden md:hidden block w-12 h-12"
                  />
                  
                </div>
                <Link to={"./Products"}>
                <button className="bg-[black] text-base font-medium lg:max-w-[250px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out">
                  50% off
                </button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousels;
