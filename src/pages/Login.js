import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("ورود موفقیت‌آمیز بود!");
  };

  return (
    <div className="login">
      <h1>ورود به حساب کاربری</h1>
      <form onSubmit={handleLogin}>
        <input name="username" placeholder="نام کاربری" onChange={handleChange} required />
        <input name="password" type="password" placeholder="رمز عبور" onChange={handleChange} required />
        <button type="submit">ورود</button>
      </form>
    </div>
  );
};

export default Login;