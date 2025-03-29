import React from 'react';
import './ExpertAdviceSection.css';

const ExpertAdviceSection = () => {
  return (
    <section className="expert-advice-section">
      <h1 className="section-title">Lời Khuyên Từ Chuyên Gia</h1>
      <p className="section-description">
        Nhận lời khuyên từ các chuyên gia da liễu hàng đầu của Vichy để chăm sóc làn da và sức khỏe của bạn một cách tối ưu.
      </p>
      <div className="advice-grid">
        <div className="advice-item">
          <img
            src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/main-picture-1-(1).jpg?rev=426e19c0f12144e79db2c1315b67ca6b&cx=0&cy=0&cw=1226&ch=680&hash=ECAEFABB775D4797EE72B31A9E78A1CF"
            alt="Expert Advice 1"
            className="advice-image"
          />
          <h3 className="advice-title">Bảo Vệ Da Khỏi Tia UV</h3>
          <p>
            "Sử dụng kem chống nắng có chỉ số SPF ít nhất 30 hàng ngày, ngay cả khi trời râm, để bảo vệ da khỏi lão hóa sớm và tổn thương do tia UV." - Dr. Minh Anh, Chuyên gia Da liễu.
          </p>
        </div>
        <div className="advice-item">
          <img
            src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/bloc-expert-frdrique-labatut.jpg?rev=a28e62ca7aab4724a427a22752b6165f&cx=0&cy=0&cw=1226&ch=680&hash=F38984B8627DAA3768E4944868C905E7"
            alt="Expert Advice 2"
            className="advice-image"
          />
          <h3 className="advice-title">Dưỡng Ẩm Hiệu Quả</h3>
          <p>
            "Dưỡng ẩm không chỉ dành cho da khô. Mọi loại da đều cần độ ẩm để duy trì hàng rào bảo vệ tự nhiên." - Dr. Thanh Huyền, Chuyên gia Da liễu.
          </p>
        </div>
        <div className="advice-item">
          <img
            src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/he-tac-nhan.jpg?rev=3fef5510f46343e7b81c2b087644fd39&cx=0&cy=0&cw=1226&ch=680&hash=9717457C90E35BF0810F76EF9A348209"
            alt="Expert Advice 3"
            className="advice-image"
          />
          <h3 className="advice-title">Chăm Sóc Tóc Khỏe Mạnh</h3>
          <p>
            "Hạn chế sử dụng nhiệt và hóa chất, đồng thời bổ sung dưỡng chất cho tóc bằng các sản phẩm chuyên dụng để tránh hư tổn." - Dr. Hoàng Nam, Chuyên gia Tóc.
          </p>
        </div>
        <div className="advice-item">
          <img
            src="https://www.vichy.com.vn/-/media/project/loreal/brand-sites/vchy/apac/vn-vichy/brand/brand-5.jpg?rev=b76f4e06582141e8973b0b8cef45b396&cx=0&cy=0&cw=1226&ch=680&hash=22E9152141BD20C61320A4B4F085604E"
            alt="Expert Advice 4"
            className="advice-image"
          />
          <h3 className="advice-title">Thói Quen Sống Lành Mạnh</h3>
          <p>
            "Ngủ đủ giấc và uống đủ nước là hai yếu tố quan trọng giúp làn da luôn tươi trẻ và khỏe mạnh." - Dr. Lan Phương, Chuyên gia Sức khỏe.
          </p>
        </div>
      </div>


      <br/>
      <h1 className="section-title">Về Vichy - Cam Kết Cho Làn Da Khỏe Mạnh</h1>
      <p className="long-description">
        Vichy là thương hiệu chăm sóc da nổi tiếng toàn cầu, được thành lập từ năm 1931 tại Pháp, với sứ mệnh mang lại làn da khỏe đẹp cho mọi người. 
        Các sản phẩm của Vichy được phát triển dựa trên nghiên cứu khoa học tiên tiến, kết hợp với nước khoáng từ suối nóng Vichy - một nguồn tài nguyên thiên nhiên giàu khoáng chất, 
        giúp nuôi dưỡng và tái tạo làn da một cách hiệu quả. Mỗi công thức đều được thử nghiệm nghiêm ngặt bởi các chuyên gia da liễu, đảm bảo an toàn và phù hợp cho cả những làn da nhạy cảm nhất. 
        Với hơn 80 năm kinh nghiệm, Vichy đã trở thành lựa chọn tin cậy của hàng triệu người dùng trên khắp thế giới, từ các sản phẩm chăm sóc da mặt, chống nắng, đến chăm sóc tóc và cơ thể. 
        Chúng tôi cam kết không chỉ dừng lại ở việc cung cấp sản phẩm chất lượng mà còn mang đến kiến thức và giải pháp toàn diện để bạn tự tin chăm sóc bản thân mỗi ngày. 
        Hãy cùng Vichy khám phá hành trình đến với làn da khỏe mạnh, rạng rỡ và tràn đầy sức sống!
      </p>
    </section>
  );
};

export default ExpertAdviceSection;