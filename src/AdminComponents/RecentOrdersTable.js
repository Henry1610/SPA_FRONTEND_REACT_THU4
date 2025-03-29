import React from "react";
import { FaSearch } from "react-icons/fa";
import { products } from "../data/products"; // Nhập danh sách sản phẩm từ products.js
import "./css/RecentOrdersTable.css";

const RecentOrdersTable = () => {
  // Tạo dữ liệu giả cho các cột "Tracking no", "In Stock", và "Total Order"
  const orders = products.map((product, index) => ({
    trackingNo: `TRK${1000 + index}`, // Tạo mã tracking giả: TRK1000, TRK1001, ...
    productName: product.name,
    price: product.price.toLocaleString("vi-VN") + " VND", // Định dạng giá
    inStock: Math.floor(Math.random() * 100) + 1, // Số lượng tồn kho giả (1-100)
    totalOrder: Math.floor(Math.random() * 50) + 1, // Số lượng đơn hàng giả (1-50)
  }));

  return (
    <div className="recent-orders-table">
      <div className="table-header">
        <h2 className="table-title">Recent Orders</h2>
        <div className="table-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here" className="search-input" />
        </div>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Tracking no</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Total Order</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.trackingNo}</td>
              <td>{order.productName}</td>
              <td>{order.price}</td>
              <td>{order.inStock}</td>
              <td>{order.totalOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;