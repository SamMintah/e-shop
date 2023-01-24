import React from "react";
import secondadd from "../assets/summer2.png"
function index() {
  return (
    <>
      <div className="py-16 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto dark:bg-[#e8c3d1]">
            <div className="lg:flex md:flex block justify-between items-center">
              <div className="md:p-10 p-4">
                <p className="text-base leading-none text-gray-800">
                  Save upto 30%
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                  Summer Sale
                </p>
                <p className="text-base leading-normal text-gray-600">
                  Want to save some cash and still look like a fashion diva ?
                  <br />
                  Checkout our summer sale now !!!
                </p>
              </div>
              <div className="md:p-4 p-4">
                <img
                  src={secondadd} className="w-[80%] md:ml-36 lg:ml-36 h-[50%]" alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
