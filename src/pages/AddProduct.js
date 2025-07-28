import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("محصول اضافه شد!");
  };

  return (
    <div className="add-product">
      <h1>افزودن محصول جدید</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="نام محصول" onChange={handleChange} required />
        <input name="price" placeholder="قیمت محصول" onChange={handleChange} required />
        <textarea name="description" placeholder="توضیحات محصول" onChange={handleChange} required />
        <button type="submit">اضافه کردن محصول</button>
      </form>
    </div>
  );
};

export default AddProduct;