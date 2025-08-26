import {Row,Col} from "antd"
import "./footer.scss"
function Footer() {
    return(
        <>
        <footer>
            <div className="footer">
            <div className="footer__top">
                <div className="container">
                    <Row gutter={[20,10]} className="footer__content">
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <h2 className="footer__content-title">THÔNG TIN</h2>
                            <div className="footer__content-list">
                                <ul>
                                    <li>Email: info@onthisinhvien.com</li>
                                    <li>Hotline: 02473 010 929</li>
                                    <li>Giờ làm việc: 8h00 - 11h30, 14h - 17h30</li>
                                    <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.015161051106!2d106.05785917502106!3d20.668962180891825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c72b87949103%3A0xd270ef9dc379fb85!2zMTkgTmfDtCBU4bqldCBU4buRLCBLaHUgUGjhu5EsIEjGsG5nIFnDqm4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1752828310234!5m2!1svi!2s"></iframe></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <h2 className="footer__content-title">TIỆN ÍCH</h2>
                            <div className="footer__content-list">
                                <ul>
                                    <li>Trang chủ</li>
                                    <li>Khóa học</li>
                                    <li>Tuyển dụng</li>
                                    <li>Đề thi</li>
                                    <li>Tin tức</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <h2 className="footer__content-title">CHÍNH SÁCH</h2>
                            <div className="footer__content-list">
                                <ul>
                                    <li>Những câu hỏi thường gặp</li>
                                    <li>Bộ quy tắc hành xử của mentor và học viên trên otsv</li>
                                    <li>Chính sách chung</li>
                                    <li>Chính sách bảo mật thông tin</li>
                                    <li>Hướng dẫn kích hoạt khóa học</li>
                                    <li>Chính sách hoàn trả học phí</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <h2 className="footer__content-title">HỢP TÁC & LIÊN KẾT</h2>
                            <div className="footer__content-list">
                                <ul>
                                    <li>Shopee UEH, UEL</li>
                                    <li>Shopee NEU</li>
                                    <li>Shopee VPP</li>
                                    <li>Shopee TMU, HVTC</li>
                                    <li>Shopee HUCE</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[20,10]} className="footer__address">
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <div className="footer__address-location">
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnOutlinedIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                                Địa chỉ: Số 69, ngõ 40 Tạ Quang Bửu, Q.Hai Bà Trưng, TP. Hà Nội
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="footer__bottom"><p>© 2025 onthisinhvien. All rights reserved.</p></div>
        </div>
        </footer>
        </>
    )
};
export default Footer;