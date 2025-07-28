import React from "react";
import { Link } from "react-router-dom";
import "./CSS.css"; 

const Header = () => {
  return (
    
    <header className="header">  
      
       <h2 className="head"> مانو دیزاین </h2>
       
       <nav className="nav-links">
        <Link to="/" className="nav-link">خانه</Link>
        <Link to="/cart" className="nav-link">سبد خرید</Link>
        <Link to="/add-product" className="nav-link">افزودن محصول</Link>
        <Link to="/login" className="nav-link">ورود</Link>
      </nav>
    </header>
  );
};

export default Header;