import React,{useState,useEffect} from 'react'
import usePostRequest from '../../hooks/usePostData';
import axios from 'axios';



const Add = () => {
  const [formData, setFormData] = useState("");
  
  const { name,price,description,category,Ingredients} = formData
  
  const handleChange =(event)=>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  
   console.log(formData);

    const handleSubmit = (e) => {
      e.preventDefault();
   
      axios.post('http://localhost:4000/product', formData)
      .then(response => {
        console.log(response);
        setFormData("");
      })
      .catch(error => {
        console.error(error);
      });
      setFormData("");
    };
  
      
  
  return (
    <>
      <div className='ml-5  content-center'>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name={name}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Type here"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price 
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name={price}
                          onChange={handleChange}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Type here"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Ingredients 
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name={Ingredients}
                          onChange={handleChange}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Type here"
                        />
                      </div>
                    </div>
                    {/* <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Count In Stock 
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="Count-In-Stock"
                          onChange={handleChange}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Type here"
                        />
                      </div>
                    </div> */}
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Category 
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name={category}
                          onChange={handleChange}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Type here"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                          onChange={handleChange}
                          name={description}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="type here"
                        defaultValue={''}
                      />
                    </div>
                  
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[black] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Add
