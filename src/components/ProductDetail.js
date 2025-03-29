// src/components/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  const price = product.price || 99.99;
  const discount = product.discount || 0;
  const finalPrice = price * (1 - discount / 100);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleOrder = () => {
    alert(`Đã đặt ${quantity} ${product.name} với tổng giá: $${(finalPrice * quantity).toFixed(2)}`);
  };

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-detail-image" 
          />
        </div>
        <div className="product-info-section">
          <p className="product-short-desc">{product.longDescription}</p>
          
          <div className="price-section">
            {discount > 0 ? (
              <>
                <span className="original-price">${price.toFixed(2)}</span>
                <span className="discounted-price">${finalPrice.toFixed(2)}</span>
                <span className="discount-label">-{discount}%</span>
              </>
            ) : (
              <span className="discounted-price">${price.toFixed(2)}</span>
            )}
          </div>

          <div className="quantity-section">
            <span>Số lượng:</span>
            <div className="quantity-control">
              <button 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <button className="order-button" onClick={handleOrder}>
            Đặt hàng
          </button>

          <div className="additional-info">
            <h3>Thông tin sản phẩm</h3>
            <ul className="product-features">
              <li>Chất lượng cao</li>
              <li>Giao hàng miễn phí</li>
              <li>Bảo hành 1 năm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;