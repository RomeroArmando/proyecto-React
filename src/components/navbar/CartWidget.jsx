import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className='cart'>
        
        <FaCartPlus className='cart-icon'/>
        <p>1</p>

    </div>
  )
}

export default CartWidget