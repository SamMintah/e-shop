import React from 'react'
// import Products from "../../components/cards/Products"
import ProductCard from "../../components/cards/ProductCard"


const ProductsPage = () => {
  return (
    <div className="container m-auto grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 ">
      <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
    </div>
  )
}

export default ProductsPage
