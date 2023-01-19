
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Add from '../../components/products/Add';

const AddProduct= () => {
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
          <h1 className='text-2xl m-5 md:text-3xl m-10 text-slate-800 font-bold'>Add Product</h1>
          <Link to={'/products'}>
          <button className="inline-flex justify-center mr-5 rounded-md border border-transparent bg-[black] py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2">
          View Products
          </button>
          </Link>
        </div>
        <div className='content-center m-5 lg:ml-20'>
        <Add/>       
        </div>
      </div>

      <div>
     </div>
     
    {/* <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto my-8 p-8 bg-white rounded-lg shadow-xl"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </form>
    {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))} */}

    </div>
   
  );
};

export default AddProduct;
