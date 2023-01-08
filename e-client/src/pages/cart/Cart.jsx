import React, { useState } from "react";
import OderSum from "../payment/OderSum"
import { useNavigate } from "react-router-dom";
import prod2 from "../../components/assets/prod2.jpg";
import prod3 from "../../components/assets/prod3.jpg";
import prod4 from "../../components/assets/prod4.jpg";
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
