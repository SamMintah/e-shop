import React, { useState } from "react";
import {Link} from "react-router-dom"
import ban2  from "../../images/ban2.jpg"


const Product3 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
     <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 m-5">
        <img
          className="w-full "
          alt="img"
          src={ban2}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Product Tittle
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
            Product Name
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center justify-center">
          <p className="mt-1.5 text-sm text-gray-800">$14.99</p>
          </div>
          </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center justify-center">
              <p className="mt-1.5 text-sm text-gray-800">
                Ingredients : Folicate ,vitamin c ,Egg ,clay, honey
          </p>
          </div>
        </div>
        <div>
            <p className=" text-base lg:leading-tight leading-normal text-gray-700 mt-7">
            Description : 
            It is a long established fact that a reader will be distracted by
            thereadable content of a page when looking at its layout. The point
            of usingLorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>        
          </div>
          <div className="flex jusitfy-between flex-row space-y-0 space-x-2 lg:flex-row items-center mt-10 w-full  lg:space-y-0 lg:space-x-4 xl:space-x-8">
            <div className="w-[80%]">
              <Link to={"/addproduct"}>
                <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 rounded text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
                  Edit
                </button>
              </Link>
            </div>
            <div className="w-[80%]">
              <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4 rounded  hover:bg-black bg-black border border-gray-800">
                Delete
              </button>
            </div>
          </div>
        <div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Product3;
