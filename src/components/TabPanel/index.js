import { CheckOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import "./tabPanel.scss";
function TabPanel() {
  const items = [
    {
      key: "1",
      label: "TẦM NHÌN",
      children: (
        <div className="tab__box">
          <div className="tab__image">
            <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftam-nhin.png&w=1920&q=75" />
          </div>
          <div className="tab__content">
            <p>
              Bằng nỗ lực sáng tạo nội dung, công nghệ và đổi mới trong quản
              trị, ÔN THI SINH VIÊN mong muốn trở thành công ty có phần mềm
              luyện thi được sinh viên sử dụng phổ biến nhất trong nước.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "SỨ MỆNH",
      children: (
        <div className="tab__box">
          <div className="tab__image">
            <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fsu-menh.png&w=1920&q=75" />
          </div>
          <div className="tab__content">
            <p>
              Sứ mệnh của OTSV là phát triển phần mềm luyện thi thay đổi cách
              học và ôn thi thông qua công cụ với nội dung bám sát chương trình
              học và tính năng thông minh tăng hiệu quả học tập.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "GIÁ TRỊ CỐT LÕI",
      children: (
        <div className="tab__box">
          <div className="tab__content">
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <h2>Tâm Huyết</h2>
                <p>
                  Đội ngũ Ôn thi sinh viên từ những anh/chị biên soạn nội dung,
                  đến anh/chị admin tin tức và admin học tập luôn{" "}
                  <b>NHIỆT TÌNH, TÂM HUYẾT</b> phục vụ vì sinh viên, là người
                  bạn đồng hành trong học tập.
                </p>
              </div>
            </div>
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <h2>Chất Lượng</h2>
                <p>
                  Các khóa luyện luôn bám sát chương trình học và đề thi theo
                  từng trường đại học. Sinh viên có thể làm quen với các dạng
                  bài tập, câu hỏi lý thuyết để tăng tốc độ làm đề. Bằng ứng
                  dụng <b>CNTT</b> sẽ giúp sinh viên học tập mọi lúc mọi nơi,
                  trên nhiều thiết bị. Tự động xác định những phần kiến thức yếu
                  của học viên để cải thiện.
                </p>
              </div>
            </div>
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <h2>Con người</h2>
                <p>
                  OTSV team gồm các anh/chị không chỉ{" "}
                  <b>GIỎI CHUYÊN MÔN, KỸ NĂNG VĂN PHÒNG</b> mà còn năng động và
                  sáng tạo. Không ngừng học hỏi và vượt qua mọi giới hạn. Sẵn
                  sàng tiếp nhận tích cực những đóng góp từ phía học viên và cải
                  thiện nội dung hàng kỳ. Giữ trong mình những chuẩn mực đạo
                  đức, văn hóa và tác phong làm việc chuyên nghiệp
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "CHẶNG ĐƯỜNG PHÁT TRIỂN",
      children: (
        <div className="tab__box">
          <div className="tab__content">
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <p>Năm 2014, Mở các lớp ôn luyện trực tiếp đầu tiên tại NEU</p>
              </div>
            </div>
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <p>
                  Năm 2017, Phát triển, mở rộng thị trường theo hướng phần mềm
                  luyện thi như ngày nay, tiền thân là hocthongminh.com
                </p>
              </div>
            </div>
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <p>
                  Năm 2019-2020, Mở rộng các chi nhánh (NEU, HUCE, UEH, UEL,
                  TMU, HVTC,..) và lấy tên gọi chính thức là Ôn thi sinh viên
                  vào ngày: 01/08/2019
                </p>
              </div>
            </div>
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <p>
                  Năm 2021, Tận dụng cơ hội phát triển thương hiệu và vươn lên
                  trở thành chuyên nghiệp
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label: "VĂN HÓA",
      children: (
        <div className="tab__box">
          <div className="tab__image">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/NNYzsy1HFZY?si=0BxzyufhJ-7ua2Ks"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="tab__content">
            <div className="tab__item">
              <div className="tab__item-icon">
                <CheckOutlined />
              </div>
              <div className="tab__item-text">
                <p>
                  Tổ chức và duy trì các hoạt động văn hóa giải trí sau những
                  giờ làm việc căng thẳng, và là cầu nối, động viên tinh thần,
                  gắn kết các thành viên. Môi trường làm việc trẻ trung, năng
                  động, bình đẳng và hồn nhiên. Các hoạt động nổi bật:Cắm
                  trại,Họp team định kỳ,Đào tạo nội bộ,...
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="tab">
        <div className="container">
          <div className="tab__wrapper">
            <div className="tab__title">Hệ thống Ôn thi sinh viên</div>
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
export default TabPanel;
