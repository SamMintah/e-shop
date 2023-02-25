import React from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context/context'
import CartItem from "../../components/cart/CartIterm"
import {cart_items} from "../../data"


const Cart = () => {

    // const { cart, total, clearCart } = useGlobalContext()
    const navigate = useNavigate();


  // if (cart.length === 0) {
  //   return (
  //     <section className='cart'>
  //       {/* cart header */}
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className='empty-cart'>is currently empty</h4>
  //       </header>
  //     </section>
  //   )
  //   }
    

  return (
  
 <div class="bg-gray-100">
  <div class="container mx-auto mt-10">
    <div class="flex sm:flex flex-wrap shadow-md ">

      <div class="lg:w-1/2 bg-white  px-10 py-10 sm:m-10 py-6">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div>
        {cart_items.map((item, id) => <CartItem key={item.id} {...item} />)}
       </div>

            {/* <CartItem/> */}
           {/* <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">     
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src="./img/ban2.jpg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Product Name</span>
              <span class="text-red-500 text-xs">Category</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border text-center w-8" type="text" value="1"/>

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
           </div> */}

        <h3 onClick={() => navigate("/products")} className="flex font-semibold text-[black] text-sm mt-10">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </h3>
      </div>

      <div id="summary" class=" ml-5 lg:w-1/3 px-10 py-10 bg-[#f6f6f6] ">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">$total</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>total</span>
          </div>
          <button onClick={() => navigate("/checkout")} class="bg-[black] font-semibold  py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Cart