import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer-top">
            <div class="footer-column">
                <h3 class="footer-title">DỊCH VỤ KHÁCH HÀNG</h3>
                <ul class="footer-list">
                    <li>Trung Tâm Trợ Giúp Shopee</li>
                    <li>Shopee Blog</li>
                    <li>Shopee Mall</li>
                    <li>Hướng Dẫn Mua Hàng/Đặt Hàng</li>
                    <li>Hướng Dẫn Bán Hàng</li>
                    <li>Ví ShopeePay</li>
                    <li>Shopee Xu</li>
                    <li>Đơn Hàng</li>
                    <li>Trả Hàng/Hoàn Tiền</li>
                    <li>Liên Hệ Shopee</li>
                    <li>Chính Sách Bảo Hành</li>
                </ul>
            </div>

            <div class="footer-column">
                <h3 class="footer-title">QUEEN SPA VIỆT NAM</h3>
                <ul class="footer-list">
                    <li>Về SPA</li>
                    <li>Tuyển Dụng</li>
                    <li>Điều Khoản Shopee</li>
                    <li>Chính Sách Bảo Mật</li>
                    <li>Shopee Mall</li>
                    <li>Kênh Người Bán</li>
                    <li>Flash Sale</li>
                    <li>Tiếp Thị Liên Kết</li>
                    <li>Liên Hệ Truyền Thông</li>
                </ul>
            </div>

            <div class="footer-column">
                <div class="footer-payment">
                    <h3 class="footer-title">THANH TOÁN</h3>
                    <ul class="payment-list">
                        <li><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt=""/></li>
                    </ul>
                </div>
                <div class="footer-shipping">
                    <h3 class="footer-title">ĐƠN VỊ VẬN CHUYỂN</h3>
                    <ul class="shipping-list">
                        <li><img src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" alt=""/></li>
                        <li><img src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd" alt=""/></li>
                    </ul>
                </div>
            </div>

            <div class="footer-column">
                <h3 class="footer-title">THEO DÕI SPA</h3>
                <ul class="footer-list social-links">
                    <li>
                        <a href="#" class="flex">
                            <img src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5" alt="Facebook" class="social-icon"/>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex">
                            <img src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91" alt="Instagram" class="social-icon"/>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex">
                            <img src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a" alt="LinkedIn" class="social-icon"/>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-column">
                <h3 class="footer-title">TẢI ỨNG DỤNG SPA</h3>
                <div class="app-download">
                    <a href="#"><img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" alt="QR Code" class="qr-code"/></a>
                    <div class="app-links">
                        <a href="#"><img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="App Store" class="app-icon"/></a>
                        <a href="#"><img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="Google Play" class="app-icon"/></a>
                        <a href="#"><img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" alt="App Gallery" class="app-icon"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-middle">
            <div>© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>
            <div class="countries">
                <span>Quốc gia & Khu vực:</span>
                <span>Singapore |</span>
                <span>Indonesia |</span>
                <span>Thái Lan |</span>
                <span>Việt Nam |</span>
                <span>Philippines |</span>
                <span>Brazil |</span>
                <span>Mexico |</span>
                <span>Colombia |</span>
                <span>Chile</span>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="policies">
                <span>CHÍNH SÁCH BẢO MẬT |</span>
                <span>QUY CHẾ HOẠT ĐỘNG |</span>
                <span>CHÍNH SÁCH VẬN CHUYỂN |</span>
                <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
            </div>
            <div class="certification">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png" alt="Certification"/>
            </div>
            <div class="company-info">
                <p>Công ty TNHH Shopee</p>
                <p>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
                <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
                <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;