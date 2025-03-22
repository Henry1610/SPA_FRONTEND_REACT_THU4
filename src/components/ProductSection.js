import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  return (
    <section className="product-section">
      <div>
        <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
        <p>Công thức cho sản phẩm chăm sóc da của Vichy được phát triển và thử nghiệm bởi các chuyên gia y tế và đã được 50.000 bác sĩ da liễu khuyên dùng.</p>
        <div className="product-grid">
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/skincare.jpg?rev=ebd007b2481a4f4189ed2651e1bf31df&cx=0.52&cy=0.43&cw=278&ch=389&hash=BE62B2FD24744966B763E2B2D4A6CEFE"
              alt="Product 1"
            />
            <h3 className="product-title">CHĂM SÓC DA</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/card-image/suncare.jpg?rev=4833fbd13c2347b3b485ac6a86d5f361&cx=0.25&cy=0.31&cw=278&ch=389&hash=005B114494F79C94DBC43D13CD28B9A5"
              alt="Product 2"
            />
            <h3 className="product-title">CHỐNG NẮNG</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/haircare.jpg?rev=af8f853e087245a791d2a08ae09093c8&cx=0.64&cy=0.49&cw=278&ch=389&hash=C11BFC2CDB8568C59E8D8B9070078E4A"
              alt="Product 3"
            />
            <h3 className="product-title">CHĂM SÓC TÓC</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/deo.jpg?rev=f0ee4f99d9f04d85963817eda15f47cd&cx=0.35&cy=0.41&cw=278&ch=389&hash=DD7BC135DE9C97B826572AC3A4042284"
              alt="Product 4"
            />
            <h3 className="product-title">SẢN PHẨM KHỬ MÙI</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="section-title">CÁC VIDEO VÀ BÀI VIẾT</h2>
        <p>Công thức cho sản phẩm chăm sóc da của Vichy được phát triển và thử nghiệm bởi các chuyên gia y tế và đã được 50.000 bác sĩ da liễu khuyên dùng.</p>
        <div className="product-grid">
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/skincare.jpg?rev=ebd007b2481a4f4189ed2651e1bf31df&cx=0.52&cy=0.43&cw=278&ch=389&hash=BE62B2FD24744966B763E2B2D4A6CEFE"
              alt="Product 1"
            />
            <h3 className="product-title">CHĂM SÓC DA</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/card-image/suncare.jpg?rev=4833fbd13c2347b3b485ac6a86d5f361&cx=0.25&cy=0.31&cw=278&ch=389&hash=005B114494F79C94DBC43D13CD28B9A5"
              alt="Product 2"
            />
            <h3 className="product-title">CHỐNG NẮNG</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/haircare.jpg?rev=af8f853e087245a791d2a08ae09093c8&cx=0.64&cy=0.49&cw=278&ch=389&hash=C11BFC2CDB8568C59E8D8B9070078E4A"
              alt="Product 3"
            />
            <h3 className="product-title">CHĂM SÓC TÓC</h3>
          </div>
          <div className="product-item">
            <img
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/category-pages/homepage-cards/deo.jpg?rev=f0ee4f99d9f04d85963817eda15f47cd&cx=0.35&cy=0.41&cw=278&ch=389&hash=DD7BC135DE9C97B826572AC3A4042284"
              alt="Product 4"
            />
            <h3 className="product-title">SẢN PHẨM KHỬ MÙI</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;