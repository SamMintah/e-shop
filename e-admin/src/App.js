import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Dashboard from  "./pages/dashboard/Dashboard"
// import AddProduct from './pages/product/AddProduct';
// import Products from './pages/product/Products';
// import Orders from './pages/order/Orders';
// import Category from './pages/category/Category';
import Main from './components/home/Main';

function App() {
  return (
    <div className="App">
       {/* <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
      </Routes> */}
       <Main/>
      </div>
  );
}

export default App;
