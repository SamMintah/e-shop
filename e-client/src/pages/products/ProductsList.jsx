import React from "react";
import ProductCard from "../../components/cards/ProductCard";
import { my_products } from "../../data";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  let navigate = useNavigate();

  return (
    <div className="container m-auto grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 ">
      {Object.keys(my_products).map((product, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(`/productdetails`, { state: { product_id: product } });
          }}
        >
          <ProductCard
            name={my_products[product].name}
            price={my_products[product].price}
            img1={my_products[product].image_1}
            img2={ my_products[product].image_2 }
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
