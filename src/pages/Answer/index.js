import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getFullTopic } from "../../services/TopicService";
import { getListAnswer } from "../../services/answerSevice";
import { data, Link } from "react-router-dom";
import { FieldTimeOutlined, ReadOutlined } from "@ant-design/icons";
import "./answer.scss";
function Answer() {
  const useId = getCookie("id");
  const [dataAnswer, setDataAnswer] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const nameTopic = await getFullTopic();

      const answerByUserId = await getListAnswer(useId);

      let result = [];
      for (let i = 0; i < answerByUserId.length; i++) {
        result.push({
          ...nameTopic.find((item) => item.id === answerByUserId[i].topicId),
          ...answerByUserId[i],
        });
      }
      setDataAnswer(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="answer">
        <div className="container">
          <div className="answer__header">
            <FieldTimeOutlined />
            <h2>Hoạt động gần đây</h2>
          </div>
          <div className="answer__body">
            {dataAnswer.length > 0 && (
              <div className="answer__list">
                {dataAnswer.map((item) => (
                  <Link to={`/result/${item.id}`}>
                    <div className="answer__item" key={item.id}>
                    <div className="answer__item--icon">
                      <ReadOutlined />
                    </div>
                    <div className="answer__item--content">
                      <h2>Bài số: {item.id}</h2>
                      <p>Bạn đã làm bài kiểm tra {item.name}</p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Answer;
