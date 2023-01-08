import { createContext,useContext, useState } from "react";
import useAxios from "../hooks/useAxios";

export const ProductContext = createContext({
  products:[],
  setProducts:(products)=>{},
})

export const ProductContextProvider = ({children})=>{
 const [products, setValue] = useState([]);

 const  setProducts =(products)=>setValue(products) 


    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext =()=>useContext(ProductContext)
