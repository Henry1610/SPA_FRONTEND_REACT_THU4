import React from 'react';
import Slider from 'react-slick';
import './css/Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Tăng tốc độ chuyển động cho mượt mà hơn
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Chuyển chậm hơn một chút (4 giây)
    pauseOnHover: true, // Tạm dừng khi hover
    arrows: true, // Bật mũi tên điều hướng
    fade: true, // Hiệu ứng fade thay vì slide
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={`${process.env.PUBLIC_URL}/images/banner-slider-1.jpeg`} alt="Slide 1" />
          <div className="slide-content">
            <h2>Thư Giãn Tuyệt Đối</h2>
            <p>Tận hưởng dịch vụ spa cao cấp tại Queen Spa</p>
          </div>
        </div>
        <div className="slide">
          <img src={`${process.env.PUBLIC_URL}/images/banner-slider-2.jpeg`} alt="Slide 2" />
          <div className="slide-content">
            <h2>Làm Đẹp Tự Nhiên</h2>
            <p>Khám phá sản phẩm chăm sóc da độc quyền</p>
          </div>
        </div>
        <div className="slide">
          <img src={`${process.env.PUBLIC_URL}/images/banner-slider-3.jpeg`} alt="Slide 3" />
          <div className="slide-content">
            <h2>Chăm Sóc Chuyên Sâu</h2>
            <p>Liệu trình được thiết kế riêng cho bạn</p>
          </div>
        </div>
        <div className="slide">
          <img src={`${process.env.PUBLIC_URL}/images/banner-slider-4.jpeg`} alt="Slide 4" />
          <div className="slide-content">
            <h2>Queen Spa - Nơi Vẻ Đẹp Thăng Hoa</h2>
            <p>Trải nghiệm sự khác biệt ngay hôm nay</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;