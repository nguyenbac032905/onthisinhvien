import { useEffect, useState } from "react";
import { getFullTopic } from "../../services/TopicService";
import { Link } from "react-router-dom";
import { getListUser } from "../../services/usersService";
import { getCookie } from "../../helpers/cookie";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./myCourses.scss";
function MyCourses() {
  const [topic, setTopic] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const userId = getCookie("id");
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getFullTopic();
      setTopic(res);
      const resUser = await getListUser(userId);
      setDataUser(resUser);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="myCourses">
        <div className="container">
          <div className="myCourses__header">
            <UnorderedListOutlined />
            <h2>Khóa học của tôi</h2>
          </div>
          <div className="myCourses__body">
            {topic.length > 0 && (
              <div className="myCourses__list">
                {topic.map((item) => {
                  if (
                    dataUser?.purchasedCourses?.find(
                      (courseId) => courseId === item.id
                    )
                  ) {
                    return (
                      <Link to={`/quiz/${item.id}`}>
                        <div className="myCourses__item" key={item.id}>
                          <div className="myCourses__item--image">
                            <img src={item.image} />
                          </div>
                          <div className="myCourses__item--content">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default MyCourses;
