
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Sidebar from '../../components/partials/Sidebar';
import Header from '../../components/partials/Header';
import Add from '../../components/products/Add';

const AddProduct= () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  return (
    <div>
        <div className="flex items-center justify-between h-16 -mb">
          <h1 className='text-2xl m-5 md:text-3xl m-10 text-slate-800 font-bold'>Add Product</h1>
          <Link to={'/products'}>
          <button className="inline-flex justify-center mr-5 rounded-md border border-transparent bg-[black] py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2">
          View Products
          </button>
          </Link>
        </div>
        <div className='content-center mr-5 lg:ml-20'>
        <Add/>       
        </div>
      </div>
   
  );
};

export default AddProduct;
