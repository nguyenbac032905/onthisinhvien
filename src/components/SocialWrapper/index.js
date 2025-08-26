import {TikTokOutlined, YoutubeOutlined} from "@ant-design/icons";
import "./socialWrapper.scss";
function SocialWrapper() {
    return(
        <>
            <div className="social">
                <div className="container">
                    <div className="social__title">
                        <h2>OTSV TRÊN CÁC NỀN TẢNG MẠNG XÃ HỘI</h2>
                        <p>Nơi chia sẻ kiến thức, kỹ năng bổ ích dành cho sinh viên</p>
                    </div>
                    <div className="social__content">
                        <div className="social__box">
                            <div className="social__box-image">
                                <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fyoutube.png&w=828&q=75"/>
                            </div>
                            <div className="social__box-icon">
                                <YoutubeOutlined />
                                <p>3.780.618+</p>
                            </div>
                            <div className="social__box-button">
                                <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">LƯỢT XEM</a>
                            </div>
                        </div>
                        <div className="social__box">
                            <div className="social__box-image">
                                <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftiktok.png&w=3840&q=75"/>
                            </div>
                            <div className="social__box-icon">
                                <TikTokOutlined />
                                <p>10,206,808+</p>
                            </div>
                            <div className="social__box-button">
                                <a href="https://www.tiktok.com/@sinhvienoi">LƯỢT XEM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default SocialWrapper;