import React, { useState } from "react";
import ProductReview1 from "./Reviews";

const Product3 = ({name,img,ingredients,description}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  

  return (
    <>
     <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 m-5">
        <img
          className="w-full "
          alt="img"
          src={img}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Product Tittle
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
          {name}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">
               ingredients : {ingredients}
            </p>
          </div>
        </div>
       
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 text-base flex items-center justify-center leading-none text-white bg-[black] w-full py-4 hover:bg-gray-700">
          Add to Cart
        </button>
        <div>
          <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">
          Description : {description}
          </p>        
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">
                Shipping and returns
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductReview1/>
    </>
   
  );
};

export default Product3;
