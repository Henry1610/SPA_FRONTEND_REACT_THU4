import React from "react";
import { FaTh, FaChartBar, FaFileInvoice, FaCalendar, FaEnvelope, FaBell, FaCog, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "./css/Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate("/login");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#2563eb"/>
        </svg>
        <span className="logo-text">QUEEN SPA</span>
      </div>
      <div className="sidebar-menu">
        <FaTh className="sidebar-icon active" size={24} />
        <FaChartBar className="sidebar-icon" size={24} />
        <FaFileInvoice className="sidebar-icon" size={24} />
        <FaCalendar className="sidebar-icon" size={24} />
        <div className="sidebar-icon-wrapper">
          <FaEnvelope className="sidebar-icon" size={24} />
          <span className="sidebar-badge">49</span>
        </div>
        <FaBell className="sidebar-icon" size={24} />
        <FaCog className="sidebar-icon" size={24} />
      </div>
      <div className="sidebar-footer">
        <FaSignInAlt className="sidebar-icon" size={24} onClick={handleLogout} style={{ cursor: 'pointer' }} />
        <FaUserPlus className="sidebar-icon" size={24} />
      </div>
    </div>
  );
};

export default Sidebar; 