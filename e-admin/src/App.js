import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/product/AddProduct';
import ProductList from './pages/product/ProductList';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Dashboard /> } />
        <Route exact path='/addproduct' element={ <AddProduct /> } />
        <Route exact path='/products' element={<ProductList/>} />
      </Routes>
    </>
  );
}

export default App;
