import React, { useState } from "react";
import OderSum from "../payment/OderSum"
import { useNavigate } from "react-router-dom";
import CartCard from "../../components/cards/Cart"

const Cart =()=> {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
         <CartCard/>
        </div>      
    );
}

export default Cart;
