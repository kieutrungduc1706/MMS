import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #ddd',
    boxShadow: 24,
    p: 4,
};

const Home = () => {

    return (
      <div>
        <header>
          <Header/>
        </header>
        <div className="main-container">
        
        </div>
        <footer style={{backgroundColor: '#bc0000', position:'absolute', bottom:0, width:'100vw', padding: '20px 0' }}>
        <div className="row footer-container-body d-flex">
            <div className="col-12 col-md-3 footer-address">
                <ul>
                    <li>
                        <b>Website: </b>duckt.dev
                    </li>
                    <li className="p_social">
                        <b>Liên kết mạng xã hội:</b>
                        <a href="https://www.facebook.com/cachxemsimphongthuyuytinchinhxacnhat/" rel="nofollow">
                            <img src="https://simphongthuy.vn/images/icons/facebook.png.webp" alt="facebook" title=""/>
                        </a>
                        <a href="https://twitter.com/xemsimphongthuy" rel="nofollow">
                            <img src="https://simphongthuy.vn/images/icons/twitter.png.webp" alt="twitter" title=""/>
                        </a>
                        <a href="skype:live:662af422ef1ae986" rel="nofollow">
                            <img src="https://simphongthuy.vn/images/icons/skype.png.webp" alt="skype"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCysufKYVGPiO3o8y92sQQig" rel="nofollow">
                            <img src="https://simphongthuy.vn/images/icons/youtube.png" alt="youtube" title="youtube"/>
                        </a>

                        <a href="https://www.google.com/maps/place/Sim+phong+th%E1%BB%A7y+-+T%C6%B0+v%E1%BA%A5n+ch%E1%BA%A5m+%C4%91i%E1%BB%83m+sim,+cung+c%E1%BA%A5p+sim+phong+th%E1%BB%A7y+uy+t%C3%ADn/@20.998382,105.8114183,17z/data=!4m5!3m4!1s0x3135ad7f41368169:0x628a3ab0a79b9c9e!8m2!3d20.998377!4d105.813607" rel="nofollow">
                            <img src="https://simphongthuy.vn/images/icons/google.png" alt="google" title="google"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-3 footer-tel">
                {/* <a href="tel:0934938383" title="Tổng đài hỗ trợ">0934.93.83.83</a> */}
                <p>Tổng đài tư vấn miễn phí</p>
            </div>
            <div className="col-12 col-md-2 footer-dmca">
                <a href="http://www.dmca.com/Protection/Status.aspx?ID=c9aa3b13-9c07-4276-b2e1-e64e4c74bd2f&amp;refurl=https://simphongthuy.vn">
                    <img src="https://simphongthuy.vn/images/46-dmca.webp" alt="DMCA Protected"/>
                </a>
            </div>
            <div className="col-12 col-md-4 footer-support">
                <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><a href="https://simphongthuy.vn/dieu-khoan-va-dieu-kien-giao-dich-tai-sim-phong-thuy.html" title="Điều khoản &amp; điều kiện">Điều khoản &amp; điều kiện</a></li>
                            <li><a href="https://simphongthuy.vn/cach-mua-sim-va-thanh-toan.html" title="Mua hàng và Thanh toán">Mua hàng và Thanh toán</a></li>
                            <li><a href="https://simphongthuy.vn/chinh-sach-bao-mat-thong-tin-khach-hang-tai-sim-phong-thuy.html" title="Chính sách bảo mật">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li><a href="https://simphongthuy.vn/chinh-sach-van-chuyen.html" title="Chính sách vận chuyển">Chính sách vận chuyển</a></li>
                            <li><a href="https://simphongthuy.vn/chinh-sach-doi-tra.html" title="Chính sách đổi trả hàng">Chính sách đổi trả hàng</a></li>
                            <li><a href="https://simphongthuy.vn/chinh-sach-bao-hanh.html" title="Chính sách bảo hành">Chính sách bảo hành</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </footer>
      </div>
    )
}


export default Home;