import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = [
    { id: 1, name: "مبل طوسی", price: "10,000,000 تومان", Image: "https://i.pinimg.com/564x/d2/ac/88/d2ac88b6eee39c4f45b139fb1e14bda6.jpg" },
    { id: 2, name: " مبل نارنجی", price: "12,000,000 تومان", Image:"https://t4.ftcdn.net/jpg/04/23/65/57/360_F_423655780_VSZ03nlUy0s1RP39cRWUHLj2bbWi2ebO.jpg" },
    { id: 3, name: "مبل کرم", price: "16,000,000 تومان", Image:"https://img.freepik.com/premium-photo/minimalistic-elegance-beige-fabric-sofa-with-wood-legs-white-background-top-view-ar-32_1000124-150810.jpg" },
    { id: 4, name: "مبل چرمی", price: "40,000,000 تومان", Image:"https://t4.ftcdn.net/jpg/06/66/89/55/360_F_666895509_oZyXEIwvU8bpevWlYgg3gLjMHr6PW7h6.jpg" },
    { id: 5, name: "مبل سبز", price: "15,000,000 تومان", Image:"https://cdn11.bigcommerce.com/s-lat6w9203f/images/stencil/1280x1280/products/572/1590/2405652_Mariposa_Sofa_2_12-Seater_FS_master__40805.1731492412.jpg?c=1" },
    { id: 6, name: "مبل آبی", price: "16,000,000 تومان", Image:"https://www.snug-interiors.com/images/products/standard/660_627.webp" },
  ];

  return (
    <div className="product-list">
      <h1>محصولات</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
          <div className="image-placeholder">
           
            <img src={product.Image} alt={product.name} className="product-image" />

           </div>
            <h2>{product.name}</h2>
            <p>{product.price}</p> 
            <Link to={`/product/${product.id}`}><div className="View-product">مشاهده محصول</div></Link>
            <button >افزودن به سبد خرید</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;