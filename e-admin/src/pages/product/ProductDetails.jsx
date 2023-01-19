
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Sidebar from '../../components/partials/Sidebar';
import Header from '../../components/partials/Header';
import Product3 from '../../components/products/ProDetails';

const ProductDetails = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

    <Sidebar sidebarOpen={ sidebarOpen } setSidebarOpen={ setSidebarOpen } />

    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={ sidebarOpen } setSidebarOpen={ setSidebarOpen } />
      <div className="flex items-center justify-between h-16 -mb">
        <h1 className='text-2xl m-5 md:text-3xl m-10 text-slate-800 font-bold'>Details</h1>
        <Link to={'/products'}>
        <button className="inline-flex justify-center mr-5 rounded-md border border-transparent bg-[black] py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2">
        View Products
        </button>
        </Link>
      </div>
      <div className='content-center  lg:ml-5'>
        <Product3/>
      </div>
    </div>
    <div>
   </div>
  </div>
  )
}

export default ProductDetails