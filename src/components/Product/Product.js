import { useEffect, useState } from "react";
import { getListTopic } from "../../services/TopicService";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartQuantity } from "../../actions/cart";
import { getCookie } from "../../helpers/cookie";
import { getListUser } from "../../services/usersService";
import { Link, useParams } from "react-router-dom";
import { Menu } from "antd";
import { getAllSchool } from "../../services/schoolSevice";
import { SearchOutlined } from "@ant-design/icons";
function Product() {
  const userId = getCookie("id");
  const [dataUser, setDataUser] = useState([]);
  const [topic, setTopic] = useState([]);
  const [school, SetSchool] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const params = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getListTopic(params.id, keyword);
      setTopic(res);

      const resUser = await getListUser(userId);
      setDataUser(resUser);

      const resSchool = await getAllSchool();
      SetSchool(resSchool);
    };
    fetchApi();
  }, [params.id, keyword]);
  const handleAddToCart = (item) => {
    if (cart.find((itemCart) => itemCart.id === item.id)) {
      dispatch(updateCartQuantity(item));
    } else {
      dispatch(addToCart(item));
    }
  };
  const items = [
    {
      key: "",
      label: <Link to="/topic">TẤT CẢ KHÓA HỌC</Link>,
    },
    ...school.map((item) => ({
      key: item.id,
      label: <Link to={`/topic/${item.id}`}>{item.name}</Link>,
    })),
  ];
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="product">
          <div className="product__menu">
            <Menu items={items} mode="inline" />
          </div>
          <div className="product__main">
              <div className="product__search">
                <div className="product__search--input">
                  <input
                    placeholder="Tìm kiếm khóa học..."
                    onChange={handleSearch}
                  ></input>
                  <SearchOutlined />
                </div>
              </div>
          {topic.length > 0 ? (
              <div className="product__box">
                {topic.map((item) => (
                  <div className="product__item" key={item.id}>
                    <div className="product__image">
                      <img src={item.image} />
                    </div>
                    <div className="product__content">
                      <div className="product__item--name">{item.name}</div>
                      <div className="product__item--description">
                        {item.description}
                      </div>
                      <div className="product__item--buy">
                        <div className="product__item--price">
                          Giá:{item.price} $
                        </div>
                        <div className="product__item--button">
                          {dataUser?.purchasedCourses?.some(
                            (itemUser) => itemUser === item.id
                          ) ? (
                            <p>ĐÃ MUA</p>
                          ) : (
                            <button
                              onClick={() => {
                                handleAddToCart(item);
                              }}
                            >
                              MUA NGAY
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
          ) : (
            <div className="product__box">
              <div className="product__alert">
                <h2>KHÓA HỌC CHƯA TỒN TẠI...</h2>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
