import React from "react";
import Navbar from "../users/Header";
import Side from "../users/Side";
import Account from "../widgets/Accont";
import SalesWidgets from "../widgets/SalesWidget";
import TopTotal from "./TopTotal";

const Main = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gray-200 lg:col-1">
        <Side />
      </div>
      <div className="col-1">
        <Account />
      </div>
    </div>
  );
};

export default Main;
