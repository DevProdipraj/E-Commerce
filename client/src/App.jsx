import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Product from "./pages/Product.jsx";
import  Contact from "./pages/Contact.jsx";
import  Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
 