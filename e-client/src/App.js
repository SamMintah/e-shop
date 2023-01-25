import "./App.css";
import Nav2 from "./components/header/Nav2";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import OderSum from "./pages/payment/OderSum";
import ProductDetails from "./pages/products/ProductPage";
import Fav from "./pages/whitelist/Fav"
import Cart from "./pages/cart/Cart"
import Faq2 from "./pages/faq/Faq2"
import Checkout3 from "./pages/payment/Checkout"

import { Routes, Route } from "react-router-dom";
import Main from "./pages/products/Main";

function App() {
  return (
    <div className="App">
     <Nav2/>
     
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<Main />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/summary" element={<OderSum />} />
        <Route path="/favorite" element={<Fav />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout3/>} />
        <Route path="/faq" element={<Faq2 />} /> 
      </Routes>
      <Footer className="mt-10"/> 
    </div>
  );
}

export default App;
