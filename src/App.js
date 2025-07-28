import React from "react"; 
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Header from "./components/Header"
import Footer from "./components/Footer";
import HomePage from "./pages/Home";


function App() {
  return (
    <Router> 
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;