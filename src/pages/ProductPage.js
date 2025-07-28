import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "طالبی ۱", price: "100,000 تومان", description: "توضیحات محصول ۱" },
  { id: 2, name: "طالبی ۲", price: "220,000 تومان", description: "توضیحات محصول ۲" },
  { id: 3, name: "طالبی ۳", price: "300,000 تومان", description: "توضیحات محصول ۳" },
  { id: 4, name: "طالبی ۴", price: "400,000 تومان", description: "توضیحات محصول ۴" },
  { id: 5, name: "طالبی ۵", price: "500,000 تومان", description: "توضیحات محصول ۵" },
  { id: 6, name: "طالبی ۶", price: "600,000 تومان", description: "توضیحات محصول ۶" },
];

const ProductPage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10); // چون useParams رشته می‌ده

  const product = products.find(p => p.id === productId);

  if (!product) return <p>محصول پیدا نشد!</p>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="https://t4.ftcdn.net/jpg/05/42/96/89/360_F_542968913_UvXxERTGauNJKvZIzwiY8tX7OjQJp3jF.jpg">اینجا تصویر محصول بزرگ قرار می‌گیرد</div>
      <p>{product.description}</p>
      <p>قیمت: {product.price}</p>
      <button>افزودن به سبد خرید</button>
    </div>
  );
};

export default ProductPage;
