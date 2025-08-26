import {
  HeartOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SmileOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./statistic.scss";

function Statistic() {
  return (
    <div className="container">
      <div className="statistic">
        <div className="statistic__title">
          <h2>Ôn thi sinh viên - thay đổi cách học và thi của bạn</h2>
        </div>
        <div className="statistic__listItem">
          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <ReadOutlined />
              </div>
            </div>
            <div className="statistic__item-number">11+</div>
            <div className="statistic__item-text">Năm</div>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <ScheduleOutlined />
              </div>
            </div>
            <div className="statistic__item-number">18+</div>
            <div className="statistic__item-text">Trường</div>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <SolutionOutlined />
              </div>
            </div>
            <div className="statistic__item-number">450+</div>
            <div className="statistic__item-text">Khóa học</div>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <TeamOutlined />
              </div>
            </div>
            <div className="statistic__item-number">300k+</div>
            <div className="statistic__item-text">Học Viên</div>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <HeartOutlined />
              </div>
            </div>
            <div className="statistic__item-number">30k</div>
            <div className="statistic__item-text">Đánh Giá</div>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-icon">
              <div className="statistic__item-hover">
                <SmileOutlined />
              </div>
            </div>
            <div className="statistic__item-number">99%</div>
            <div className="statistic__item-text">Qua Môn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
