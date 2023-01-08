import React from 'react'
import Products from "./Products"
import ProHead from "../header/ProHead"
import Socials from "./Socials"
import Highlight1 from "./Highlight"
import mainPro from "../assets/mainProHead.png"

const MainProducts = () => {
  return (
    <div>
     <img src={mainPro}/>
      <ProHead/>
      <Products/>
       <Highlight1/>
       <Products/>
      <Socials/>
    </div>
  )
}

export default MainProducts
