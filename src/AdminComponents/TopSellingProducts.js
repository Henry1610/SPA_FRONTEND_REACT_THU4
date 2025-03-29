import React from "react";
import { products } from "../data/products";
import "./css/TopSellingProducts.css";

const TopSellingProducts = () => {
  return (
    <div className="top-selling-products">
      <h2 className="section-title">Top Selling Products</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price.toLocaleString("vi-VN")} VND</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;