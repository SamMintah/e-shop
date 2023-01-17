import React from "react";
import Navbar from "../users/Header";
import Side from "../users/Side";
import Account from "../widgets/Accont";
import SalesWidgets from "../widgets/SalesWidget";
import TopTotal from "./TopTotal";

const Main = () => {
  return (
    <div className="md:flex ml-42">
      <Side />
      <Account/>
    </div>
  );
};

export default Main;
