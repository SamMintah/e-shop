import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import blog2 from "../../images/blog2.jpg";
import ban2 from "../../images/ban2.jpg";

const ProductCard = () => {
  return (
    <div>
      <Link
        to={"/productdetails"}
        className="relative block overflow-hidden group  lg:m-3"
      >
        <div className="relative h-64 sm:h-72">
          <img
            src={ban2}
            alt=""
            className="absolute inset-0 p-2 rounded-t-lg object-cover w-full h-full opacity-100 group-hover:opacity-0"
          />
          <img
            src={blog2}
            alt=""
            className="absolute inset-0 p-2 rounded-t-lg  object-cover w-full h-full opacity-0 group-hover:opacity-50"
          />
        </div>
        <div className="p-6 border border-gray-100 sm:p-2">
          {/* <span className="whitespace-nowrap bg-[#e8c3d1] px-3 py-1.5 text-xs font-medium">
            New
          </span> */}
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Product Name
          </h3>
          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
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
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
