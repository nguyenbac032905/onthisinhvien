import { useEffect, useState } from "react";
import { getListSchool } from "../../services/schoolSevice";
import "./schoolCategory.scss";
import {ReadOutlined, SearchOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

function SchoolCategory() {
  const [dataSchool, setDataSchool] = useState([]);
  const [keyword,setKeyword] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getListSchool(keyword);
      setDataSchool(res);
    };
    fetchApi();
  },[keyword]);
  const handleSearch = (e) => {
    setKeyword(e.target.value.toUpperCase());
  }
  const goToCourses = (item) => {
    navigate(`topic/${item.id}`)
  }
  return (
    <>
      <div className="category">
        <div className="container">
          <div className="category__title">
            <h2>Danh sách trường học</h2>
            <p>
              <b>400+</b> khóa luyện chi tiết theo từng trường Đại học, giúp ôn
              thi hiệu quả
            </p>
            <div className="category__formSearch">
              <input placeholder="Tìm kiếm tên trường..." onChange={handleSearch}></input>
              <SearchOutlined />
            </div>
          </div>
          {dataSchool && (
            <div className="category__content">
              {dataSchool.map((item) => (
                <div className="category__box" key={item.id}>
                  <div className="category__box-top">
                    <div className="category__box-image">
                      <img src={item.image} alt="ảnh trường" />
                    </div>
                    <div className="category__box-title">
                      <p>{item.alias}</p>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                  <div className="category__box-bottom">
                    <div className="category__box-number"><ReadOutlined /><p>{item.courses} khóa học</p></div>
                    <div className="category__box-button">
                      <button onClick={() => goToCourses(item)}>xem thêm</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default SchoolCategory;
