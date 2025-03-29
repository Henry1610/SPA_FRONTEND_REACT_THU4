import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login"; 
import Header from "./components/Header";
import SimpleSlider from "./components/Slider";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import "./App.css"; 
import { useState } from "react";
import ExpertAdviceSection from "./components/ExpertAdviceSection";
import BrandPage from "./components/BrandPage";
import AppAdmin from "./AdminComponents/AppAdmin";

function App() {
  // Khởi tạo isAuthenticated và isAdmin từ localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    // Kiểm tra nếu storedAuth tồn tại và là JSON hợp lệ
    try {
      return storedAuth !== null ? JSON.parse(storedAuth) : false;
    } catch (e) {
      console.error("Lỗi parse localStorage:", e);
      return false; // Trả về false nếu parse thất bại
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem('isAdmin');
    // Kiểm tra nếu storedAdmin tồn tại và là JSON hợp lệ
    try {
      return storedAdmin !== null ? JSON.parse(storedAdmin) : false;
    } catch (e) {
      console.error("Lỗi parse localStorage:", e);
      return false; // Trả về false nếu parse thất bại
    }
  });

  // Đồng bộ trạng thái với localStorage khi isAuthenticated và isAdmin thay đổi
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [isAuthenticated, isAdmin]);

  // Hàm xử lý khi đăng nhập thành công
  const handleLogin = (isAdminUser) => {
    setIsAuthenticated(true);
    setIsAdmin(isAdminUser);
  };

  // Hàm xử lý khi đăng xuất
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <Routes>
        {/* Trang Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to={isAdmin ? "/admin" : "/"} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Trang Admin */}
        <Route
          path="/admin"
          element={
            isAuthenticated && isAdmin ? (
              <AppAdmin onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Trang chính (Home) */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <SimpleSlider />
                <ProductSection />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Trang danh sách sản phẩm */}
        <Route
          path="/products"
          element={
            isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <ProductPage />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Trang chi tiết sản phẩm */}
        <Route
          path="/product/:id"
          element={
            isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <ProductDetail />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Các route khác */}
        <Route path="/advice" element={<>
          <Header onLogout={handleLogout} />
          <ExpertAdviceSection/>
          <Footer/>
        </>} />
        <Route path="/brand" element={<>
          <Header onLogout={handleLogout} />
          <BrandPage/>
          <Footer/>
        </>} />
      </Routes>
    </Router>
  );
}

export default App;