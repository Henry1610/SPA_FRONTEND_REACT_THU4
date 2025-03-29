import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="header-right">
        <img src="https://flagcdn.com/w20/gb.png" alt="Flag" className="flag-icon" />
        <div className="notification-wrapper">
          <FaBell className="notification-icon" size={20} />
          <span className="notification-badge">2</span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="User"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Header;