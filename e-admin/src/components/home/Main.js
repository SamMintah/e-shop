import React from "react";
import Navbar from "../users/Header";
import Side from "../users/Side";
import SalesWidgets from "../widgets/SalesWidget";
import TopTotal from "./TopTotal";

const Main = () => {
  return (
    <div>
      <Side />
      <TopTotal />
      <TopTotal/>
      <TopTotal/>
        <SalesWidgets/>
    </div>
  );
};

export default Main;
