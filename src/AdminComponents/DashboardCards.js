import React from "react";
import { FaHeart, FaBox, FaShoppingBag, FaBriefcase } from "react-icons/fa";
import "./css/DashboardCards.css";

const DashboardCards = () => {
  const cards = [
    { icon: <FaHeart />, title: "Save Products", value: "178+", color: "blue" },
    { icon: <FaBox />, title: "Stock Products", value: "20+", color: "yellow" },
    { icon: <FaShoppingBag />, title: "Sales Products", value: "190+", color: "red" },
    { icon: <FaBriefcase />, title: "Job Application", value: "12+", color: "purple" },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className={`card-icon ${card.color}`}>{card.icon}</div>
          <div className="card-content">
            <p className="card-title">{card.title}</p>
            <p className="card-value">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;