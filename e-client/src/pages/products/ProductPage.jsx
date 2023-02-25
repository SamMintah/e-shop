import React from "react";
import ProDetails from "../../components/cards/ProDetails";
import { my_products } from "../../data";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  let { state } = useLocation();
  let product_id = state.product_id;

  return (
    <div>
          <ProDetails
            name={my_products[product_id].name}
            img={my_products[product_id].image_1}
            ingredients={my_products[product_id].ingredients}
            description={my_products[product_id].description}
          />
    </div>
  );
};

export default ProductDetails;
