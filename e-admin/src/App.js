import React, { useEffect,useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import AddProduct from './pages/product/AddProduct';
import ProductList from './pages/product/ProductList';
import Dashboard from './pages/dashboard/Dashboard';
import ProductDetails from './pages/product/ProductDetails';
import Sidebar from "./components/partials/Side";
import Header from './components/partials/Header';

function App() {
  const [showMenu, setShowMenu] = useState(true)

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={showMenu} setSidebarOpen={setShowMenu} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={showMenu} setSidebarOpen={setShowMenu} />
        <Routes>
        <Route exact path="/" element={ <Dashboard/> } />
        <Route exact path='/addproduct' element={ <AddProduct /> } />
        <Route exact path='/products' element={ <ProductList /> } />
        <Route exact path='/productdetails' element={<ProductDetails/>} />
      </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
