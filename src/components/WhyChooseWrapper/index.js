import { Col, Row } from "antd";
import {
  EditOutlined,
  QuestionOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import "./whyChooseWrapper.scss";
function WhyChooseWrapper() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="wrapper__title">
            <h2>Vì sao hơn 200,000 bạn chọn</h2>
            <h3>Onthisinhvien.com</h3>
            <p>Bí quyết chinh phục điểm A các môn đại cương và chuyên ngành</p>
          </div>
          <div className="wrapper__content">
            <div className="wrapper__content">
              <Row gutter={[20, 10]}>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                  <div className="wrapper__box">
                    <div className="wrapper__content-icon">
                      <ReadOutlined />
                    </div>
                    <div className="wrapper__content-question">
                      Em không biết môn này học cái gì?
                    </div>
                    <div className="wrapper__content-answer">
                      Đừng lo, Khóa luyện sẽ "Review đề thi" lại cho em, đề thi
                      có bao nhiêu câu, rơi vào những phần kiến thức nào,...
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                  <div className="wrapper__box">
                    <div className="wrapper__content-icon">
                      <EditOutlined />
                    </div>
                    <div className="wrapper__content-question">
                      Em không biết bắt đầu học từ đâu?
                    </div>
                    <div className="wrapper__content-answer">
                      Đừng lo, Khóa luyện luôn tạo ra "Lộ trình học tập" để học
                      từ đầu đến cuối, biết mình đang học đến đâu, cần học thêm
                      những gì.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                  <div className="wrapper__box">
                    <div className="wrapper__content-icon">
                      <QuestionOutlined />
                    </div>
                    <div className="wrapper__content-question">
                      Em không biết hỏi bài ai?
                    </div>
                    <div className="wrapper__content-answer">
                      Đừng lo, Khóa luyện có một "Group chat riêng" để hỗ trợ
                      em, giúp em trả lời các câu hỏi, giải đáp các thắc mắc về
                      môn học nhé.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyChooseWrapper;
