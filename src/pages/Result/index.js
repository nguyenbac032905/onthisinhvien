import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answerSevice";
import { getListQuestion } from "../../services/questionService";
import "./result.scss";
import { Link } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
function Result() {
  const params = useParams();
  const [dataTrueCount, setDataTrueCount] = useState(0);
  const [dataFalseCount, setDataFalseCount] = useState(0);
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestions = await getListQuestion(dataAnswers.topicId);
      const result = [];
      for (let i = 0; i < dataQuestions.length; i++) {
        result.push({
          ...dataQuestions[i],
          ...dataAnswers.answers.find(
            (item) => item.questionId === dataQuestions[i].id
          ),
        });
      }
      setDataResult(result);

      let trueCount = 0;
      let falseCount = 0;
      result.map((item) => {
        if (item.answer === item.correctAnswer) {
          trueCount++;
        } else {
          falseCount++;
        }
      });
      setDataFalseCount(falseCount);
      setDataTrueCount(trueCount);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="result">
        <div className="container">
          <div className="result__header">
            <div className="result__header--title">
              <WarningOutlined />
              <h2>Thông tin chung</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Số câu đúng:</td>
                  <td><h2>{dataTrueCount}</h2></td>
                </tr>
                <tr>
                  <td>Số câu sai</td>
                  <td><h2>{dataFalseCount}</h2></td>
                </tr>
                <tr>
                  <td>Phần trăm đúng sai :{" "}</td>
                  <td><h2>{(dataTrueCount / (dataTrueCount + dataFalseCount)) * 100}%</h2></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="result__body">
            {dataResult.length > 0 && (
              <div className="result__list">
                {dataResult.map((itemQuestion, indexQuestion) => (
                  <div className="result__item" key={itemQuestion.id}>
                    <div className="result__item--question">
                      <h2>
                        Câu {indexQuestion + 1}: {itemQuestion.question}
                      </h2>
                    </div>
                    {itemQuestion.answers.map((item, index) => {
                      let checked = false;
                      let className = "";
                      if (itemQuestion.answer === index) {
                        checked = true;
                        className = "result__checked ";
                      }
                      if (itemQuestion.correctAnswer === index) {
                        className = "result__true";
                      }
                      return (
                        <div className={`exam__item--answer ${className}`} key={index}>
                          <input type="radio" checked={checked} readOnly />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
          {dataResult.length > 0 && (
            <Link to={"/quiz/" + dataResult[0].topicId}>
              <div className="result__button"><button>Làm lại</button></div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Result;
