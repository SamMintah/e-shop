import React from 'react'
import { useGlobalContext } from '../../context/context'

const CartItem = ({ id, img, name, price, amount }) => {
  // const { remove, increase, decrease, toggleAmount } = useGlobalContext()


  return (

    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">                      
          <div class="flex w-2/5"> 
            <div class="w-20">
            <img class="h-24" src="./img/ban2.jpg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">name</span>
              <span class="text-red-500 text-xs">Category</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" >remove</a>
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
          <span class="text-center w-1/5 font-semibold text-sm">$400</span>
          <span class="text-center w-1/5 font-semibold text-sm">$400</span>
        </div>
    // <article className='cart-item'>
    //   <img src={img} alt={title} />
    //   <div>
    //     <h4>{title}</h4>
    //     <h4 className='item-price'>${price}</h4>
    //     {/* remove button */}
    //     <button className='remove-btn' onClick={() => remove(id)}>
    //       remove
    //     </button>
    //   </div>
    //   <div>
    //     {/* increase amount */}
    //     <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
    //       <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
    //         <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
    //       </svg>
    //     </button>
    //     {/* amount */}
    //     <p className='amount'>{amount}</p>
    //     {/* decrease amount */}
    //     <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
    //       <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
    //         <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
    //       </svg>
    //     </button>
    //   </div>
    // </article>

  )
}

export default CartItem