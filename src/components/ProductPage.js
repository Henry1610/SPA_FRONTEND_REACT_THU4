import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc sản phẩm theo danh mục hoặc tìm kiếm theo tên
  const filteredProducts = products.filter((product) =>
    (category === '' || product.category === category) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm định dạng giá tiền với dấu phân cách hàng nghìn
  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "Giá không xác định";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ";
  };

  // Hàm xử lý khi nhấn nút đặt hàng
  const handleOrder = (product) => {
    // Ở đây bạn có thể thêm logic xử lý đặt hàng
    // Ví dụ: thêm vào giỏ hàng, chuyển hướng đến trang đặt hàng, v.v.
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="product-page">
      <h1>SẢN PHẨM NỔI BẬT</h1>

      {/* Bộ lọc sản phẩm */}
      <div className="filter-container">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Tất cả danh mục</option>
          <option value="electronics">Kem chống nắng</option>
          <option value="clothing">Trị mụn</option>
          <option value="accessories">Khử mùi</option>
        </select>

        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Hiển thị danh sách sản phẩm */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p className="product-price">{formatPrice(product.price)}</p>
              <button 
                className="order-button"
                onClick={() => handleOrder(product)}
              >
                Đặt hàng
              </button>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp!</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;