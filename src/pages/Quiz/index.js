import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../services/TopicService";
import { getListQuestion } from "../../services/questionService";
import { getCookie } from "../../helpers/cookie";
import { postListAnswers } from "../../services/answerSevice";
import { useNavigate } from "react-router-dom";
import "./quiz.scss";
function Quiz() {
  const navigate = useNavigate();
  const params = useParams();
  const [answersId, setAnswersId] = useState([]);
  const userId = getCookie("id");
  const [nameTopic, setNameTopic] = useState([]);
  const answers = Object.entries(answersId).map(([key, value]) => ({
    questionId: parseInt(key),
    answer: parseInt(value),
  }));
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getTopic(params.id);
      setNameTopic(res);
    };
    fetchApi();
  }, []);

  const [listQuestion, setListQuestion] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getListQuestion(params.id);
      setListQuestion(res);
    };
    fetchApi();
  }, []);
  const handleQuestion = (e) => {
    setAnswersId((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));
  };
  const handleQuiz = async (e) => {
    e.preventDefault();
    let quiz = {
      userId: parseInt(userId),
      topicId: parseInt(params.id),
      answers: answers,
    };
    const res = await postListAnswers(quiz);
    navigate("/result/" + res.id);
  };
  return (
    <>
      <div className="exam">
        <div className="container">
          <div className="exam__header">
            <h2>
              Kiểm tra trắc nhiệm:{" "}
              {nameTopic.length > 0 && <>{nameTopic[0].name}</>}{" "}
            </h2>
          </div>
          <div className="exam__body">
            <form onSubmit={handleQuiz}>
              {listQuestion.length > 0 && (
                <div className="exam__list">
                  {listQuestion.map((itemQuestion, indexQuestion) => (
                    <div className="exam__item" key={itemQuestion.id}>
                      <div className="exam__item--question">
                        <h2>
                          Câu {indexQuestion + 1}: {itemQuestion.question}
                        </h2>
                      </div>
                      {itemQuestion.answers.map((item, index) => (
                        <div className="exam__item--answer" key={index}>
                          <input
                            type="radio"
                            name={itemQuestion.id}
                            value={index}
                            onChange={handleQuestion}
                            id={`answer-${itemQuestion.id}-${index}`}
                          />
                          <label htmlFor={`answer-${itemQuestion.id}-${index}`}>
                            <p>{item}</p>
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <div className="exam__button"><button type="submit">Nộp bài</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Quiz;
