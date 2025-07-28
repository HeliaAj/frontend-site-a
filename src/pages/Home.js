import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>به فروشگاه مانو دیزاین خوش آمدید</h1>
      <p>اگر می‌خواهید محصولات را ببینید، روی دکمه زیر کلیک کنید</p>
      
      <Link to="/products" className="view-products-button">
        مشاهده محصولات
      </Link>
    </div>
  );
};

export default HomePage;
