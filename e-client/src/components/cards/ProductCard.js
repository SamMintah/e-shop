import React from "react";
import {Link} from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import ban2 from "../assets/ban2.jpg"
import blog2 from "../assets/blog2.jpg"

const ProductCard = () => {
  
  return (
    <div>
      <Link to={"/productdetails"} className="relative block overflow-hidden group  lg:m-3">
        <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
            <MdFavoriteBorder/>
        </button>
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
        <h3 className="mt-4 text-lg font-medium text-gray-900">Product Name</h3>
          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
          <form className="mt-4">
            <button className="text-white bg-[black] hover:bg-white hover:text-[black] w-[100%] text-sm px-5 py-2.5 rounded lg:w-[50%]">
              Add to cart
            </button>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
