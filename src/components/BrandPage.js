// src/components/BrandPage.js
import React from 'react';
import './BrandPage.css';

const BrandPage = () => {
  return (
    <div className="brand-component">
      <div className="content-wrapper">
        <div className="content-box">
          <div className="text-area">
            <h2>Giới thiệu thương hiệu</h2>
            <p>Chúng tôi là một thương hiệu tiên phong với cam kết mang đến những sản phẩm chất lượng cao, kết hợp giữa sáng tạo và công nghệ hiện đại. Tầm nhìn của chúng tôi là xây dựng một cộng đồng bền vững, nơi mỗi người đều có thể tận hưởng giá trị từ những điều nhỏ bé trong cuộc sống hàng ngày, đồng thời góp phần bảo vệ môi trường.</p>
          </div>
          <div className="image-area">
            <img 
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/stage-of-life-image-unique.jpg?rev=c5ec748fdcc1419ca72d38b149f9f953&cx=0&cy=0&cw=1226&ch=680&hash=E373E885D6CD6DEF904487BC25BF7E26" 
              alt="Intro Image" 
            />
          </div>
        </div>
      </div>

      <div className="content-wrapper reverse">
        <div className="content-box">
          <div className="image-area">
            <img 
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/main-picture-1-(1).jpg?rev=426e19c0f12144e79db2c1315b67ca6b&cx=0&cy=0&cw=1226&ch=680&hash=ECAEFABB775D4797EE72B31A9E78A1CF" 
              alt="Mission Image" 
            />
          </div>
          <div className="text-area">
            <h2>Sứ mệnh của chúng tôi</h2>
            <p>Sứ mệnh của chúng tôi là đổi mới không ngừng để đáp ứng nhu cầu ngày càng cao của khách hàng. Chúng tôi tập trung vào việc tạo ra những sản phẩm không chỉ đẹp về thiết kế mà còn bền vững, thân thiện với môi trường. Sự hài lòng của bạn là động lực để chúng tôi phát triển và lan tỏa giá trị tích cực đến cộng đồng.</p>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content-box">
          <div className="text-area">
            <h2>Giá trị cốt lõi</h2>
            <p>Chất lượng, sáng tạo và bền vững là ba trụ cột định hình thương hiệu của chúng tôi. Mỗi sản phẩm đều được chăm chút tỉ mỉ từ ý tưởng đến khâu sản xuất, nhằm mang lại trải nghiệm tuyệt vời cho khách hàng. Chúng tôi tin rằng sự phát triển bền vững là chìa khóa để tạo nên một tương lai tốt đẹp hơn cho tất cả mọi người.</p>
          </div>
          <div className="image-area">
            <img 
              src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/bloc-expert-frdrique-labatut.jpg?rev=a28e62ca7aab4724a427a22752b6165f&cx=0&cy=0&cw=1226&ch=680&hash=F38984B8627DAA3768E4944868C905E7" 
              alt="Values Image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;