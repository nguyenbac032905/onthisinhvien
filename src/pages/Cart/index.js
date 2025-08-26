import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import "./cart.scss";
import { getCookie } from "../../helpers/cookie";
import { editUser, getListUser } from "../../services/usersService";
import { useEffect, useState } from "react";
import { getFullTopic } from "../../services/TopicService";
function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const userId = getCookie("id");
  const [listTopic, setListTopic] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [purchasedCourses,setPurchasedCourses] = useState([]);
  const cartCourse = { purchasedCourses: purchasedCourses };
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity * item.info.price;
  }, 0);
  const handlePayCart = async () => {
    const res = await editUser(userId, cartCourse);
    if (res) {
      alert("mua thành công");
    }
  };
  useEffect(() => {
    const fetchApi = async () => {
      const resTopic = await getFullTopic();
      const resUser = await getListUser(userId);
      setDataUser(resUser);
      setListTopic(resTopic);
    };
    fetchApi();
  }, []);
  useEffect(() => {
    if (dataUser && listTopic) {
      const myCourses =
        listTopic?.filter((item) =>
          dataUser?.purchasedCourses?.includes(item.id)
        ) || [];
      const myCourseId = myCourses.map((item) => item.id);
      const resCourses = [...myCourseId.map(item => item),...cart.map(item => item.info.id)];
      setPurchasedCourses(resCourses);
    }
  }, [dataUser, listTopic]);
  console.log(purchasedCourses)
  return (
    <>
      <div className="cart">
        {cart && (
          <div className="container">
            <div className="cart__panel">
              <div className="cart__box">
                <CartItem cart={cart} />
              </div>
              <div className="cart__info">
                <div className="cart__pay">
                  <h2>Thông tin đơn hàng</h2>
                  <hr></hr>
                  <div className="cart__total">
                    <h2>Tổng tiền :</h2>
                    <h2>{total}$</h2>
                  </div>
                  <hr></hr>
                  <div className="cart__button">
                    <button onClick={handlePayCart}>THANH TOÁN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
