import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../assets/prod1.jpg";
import prod2 from "../assets/prod2.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import prod5 from "../assets/prod5.jpg";
import ProductCard from "./ProductCard"

function Products() {
  return (
    <div className="container m-auto grid grid-cols-2 grid-rows-2 md:grid-cols-2  lg:grid-cols-4 lg:grid-rows-1 ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  );
}

export default Products;
