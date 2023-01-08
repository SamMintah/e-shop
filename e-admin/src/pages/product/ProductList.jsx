import React, { useEffect } from 'react';
import Product from './Product';
import useAxios from '../hooks/useAxios';
import Spinner from '../components/Spinner';
import { useProductContext } from '../context/productContext';

const ProductList = () => {
  const { data ,isLoading, error } = useAxios("https://fakestoreapi.com/products");
  const{products, setProducts} = useProductContext();
 

  useEffect(()=>{
    setProducts(data);
    },[data]);

 if(isLoading) return <Spinner/>;

 if (error) return <p>{error}</p>;


  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
    {products?.map((data)=>(
     <Product product={data}/>
    ))}
    </div>
    
    
  )
}

export default ProductList