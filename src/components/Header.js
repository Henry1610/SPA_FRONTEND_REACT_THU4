// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogout }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/" className="brand-link">QUEEN SPA</Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/products" className="nav-link">CÁC SẢN PHẨM CỦA QUEEN</Link>
          </li>
          <li className="nav-item">
            <Link to="/advice" className="nav-link">LỜI KHUYÊN CỦA CHUYÊN GIA</Link>
          </li>
          <li className="nav-item">
            <Link to="/brand" className="nav-link">THƯƠNG HIỆU CỦA CHÚNG TÔI</Link>
          </li>
          <li className="nav-item">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="logout-btn">
                Đăng xuất
              </button>
            ) : (
              <Link to="/login" className="nav-link login-link">Đăng nhập</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;