import React from 'react'
import Products from "./Products"
import ProHead from "../header/ProHead"
import Socials from "./Socials"
import MainBanner2 from "./MainBanner2"
import MainBanner from './MainBanner'

const MainProducts = () => {
  return (
    <div>
    <MainBanner/>
      <ProHead/>
      <Products/>
       <MainBanner2/>
       <Products/>
      <Socials/>
    </div>
  )
}

export default MainProducts
