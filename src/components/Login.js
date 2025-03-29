import React, { useState } from "react";
import "./css/Login.css"; // Import CSS

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra đăng nhập admin
    if (username === "admin" && password === "admin123") {
      onLogin(true); // Đăng nhập với quyền admin
    } 
    // Kiểm tra đăng nhập thường
    else if (username === "user" && password === "123456") {
      onLogin(false); // Đăng nhập không có quyền admin
    } 
    else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng nhập</button>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="login-info">
          <p>Tài khoản admin: admin / admin123</p>
          <p>Tài khoản thường: user / 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Login;