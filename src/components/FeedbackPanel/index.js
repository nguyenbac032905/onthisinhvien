import { Carousel, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getListFeedback } from "../../services/feedbackSevice";
import "./feedbackPanel.scss"
function FeedbackPanel() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getListFeedback();
      setFeedback(res);
    };
    fetchApi();
  }, []);
  const feedbackSlide = [];
  for (let i = 0; i < feedback.length; i += 4) {
    feedbackSlide.push(feedback.slice(i, i + 4));
  }
  return (
    <>
      <div className="feedback">
        <div className="container">
            <div className="feedback__title">
                <h2>Phản hồi của học viên kỳ trước</h2>
            </div>
          {feedback && (
            <Carousel className="feedback__slide">
              {feedbackSlide.map((item, index) => (
                <div className="feedback__box">
                  <div className="feedback__item">
                    <div className="feedback__name">{item[0].name}</div>
                    <div className="feedback__image">
                      <img src={item[0].image} />
                    </div>
                  </div>
                  <div className="feedback__item">
                    <div className="feedback__name">{item[1].name}</div>
                    <div className="feedback__image">
                      <img src={item[1].image} />
                    </div>
                  </div>
                  <div className="feedback__item">
                    <div className="feedback__name">{item[2].name}</div>
                    <div className="feedback__image">
                      <img src={item[2].image} />
                    </div>
                  </div>
                  <div className="feedback__item">
                    <div className="feedback__name">{item[3].name}</div>
                    <div className="feedback__image">
                      <img src={item[3].image} />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
}
export default FeedbackPanel;
