import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/partials/Sidebar";
import Header from "../../components/partials/Header";
// import Product from './Product';
// import useAxios from '../hooks/useAxios';
// import Spinner from '../components/Spinner';
// import { useProductContext } from '../context/productContext';
import ProductCard from "../../components/products/ProductCard";

const ProductList = () => {
  // const { data ,isLoading, error } = useAxios("https://fakestoreapi.com/products");
  // const{products, setProducts} = useProductContext();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(()=>{
  //   setProducts(data);
  //   },[data]);

  //  if(isLoading) return <Spinner/>;

  //  if (error) return <p>{error}</p>;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex items-center justify-between h-16 -mb">
          <h1 className="text-2xl m-5 md:text-3xl m-10 text-slate-800 font-bold ">
            Products
          </h1>
          <Link to={'/addproduct'}>
          <button className="inline-flex justify-center mr-5 rounded-md border border-transparent bg-[black] py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2">
            Add-Product
          </button>
          </Link>
        </div>
        <div className="container m-auto grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* {products?.map((data)=>(
     <Product product={data}/>
    ))} */}
    </div>
  );
};

export default ProductList;
