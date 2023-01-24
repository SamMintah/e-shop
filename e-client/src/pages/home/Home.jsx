import React from "react";
import ProductsPage from "../products/Products";
import HomeBanner from "../../components/cards/HomeBanner";
import HomeBanner2 from "../../components/cards/HomeBanner2";
import FootBanner from "../../components/cards/FootBanner";
import Carousels from "../../components/cards/Carousels";
import PageHeading1 from "../../components/header/ProHead";
import Blog2 from "../../components/blog/BLog2";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <div className="mt-0">
      <Carousels />
      <div className="mt-2">
        <PageHeading1 />
        < ProductsPage />
      </div>
      <HomeBanner />
      <div className="mt-2 items-center">
        <h1 className="text-[black] text-xl font-bold m-5">NEW ARIVAL</h1>
        <ProductsPage />
      </div>
      <HomeBanner2 />
      <div className="mt-2 items-center">
        <h1 className="text-[black] text-xl font-bold m-5">
          SHOP BEST SELLERS 
        </h1>
        <ProductsPage />
      </div>
      <div className="mt-2">
        <Blog2 />
      </div>
      <FootBanner />
      <Link to={"./Products"}>
        <button className="bg-[black] text-base font-medium lg:max-w-[450px] w-full px-3 py-2 mb-10 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out">
          Shop All
        </button>
      </Link>
    </div>
  );
};

export default Home;
