import React,{useEffect, useState} from 'react'
import axios from 'axios'

const useAxios = (url) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading ] = useState(false);
   const [ error,setError ] = useState(null);

    useEffect(()=>{
        const getData = async() => {
            setIsLoading(true);
            try {
                const result = await axios.get(url)
                setData(result.data)
             } catch (error) {
                setError(error.message)
             }finally{
                setIsLoading(false);
             }
        };
        getData();
    },[url])
   return {data ,isLoading, error}
}

export default useAxios