import React from "react";
import MainBanner from "../../components/cards/MainBanner";
import MainBanner2 from "../../components/cards/MainBanner2";
import ProHead from "../../components/header/ProHead";
import ProductsList from "./ProductsList";

const Main = () => {
  return (
    <div>
      <MainBanner />
      <ProHead />
      <ProductsList />
      <MainBanner2 />
      <ProductsList />
    </div>
  );
};

export default Main;
