import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import JadeCare from './pages/JadeCare';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/aboutus" element={<AboutUs/>}/>
          <Route exact path = "/jadecare" element={<JadeCare/>}/>
          <Route path = "/products/:categories" element={<ProductList/>}/>
          <Route path = "/product/:id" element={<Product/>}/>
          <Route path = "/Cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;