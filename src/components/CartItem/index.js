import { useDispatch } from "react-redux";
import { deleteItem, updateCartQuantity } from "../../actions/cart";
import "./cartItem.scss";
import { CloseOutlined } from "@ant-design/icons";
function CartItem(props) {
  const cart = props.cart;
  const dispatch = useDispatch();
  const handleDownQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateCartQuantity(item, -1));
    }
  };
  const handleUpQuantity = (item) => {
    dispatch(updateCartQuantity(item, +1));
  };
  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };
  return (
    <>
      {cart.map((item) => (
        <div className="cart__item" key={item.id}>
          <div className="cart__item--image">
            <img src={item.info.image} />
          </div>
          <div className="cart__item--content">
            <h2>neu luyện đề {item.info.name}</h2>
            <p>{item.info.description}</p>
            <h3>Thời gian: {item.info.duration}</h3>
          </div>
          <div className="cart__item--button">
            <p>Giá: {item.info.price}$</p>
            <div className="buttonQuantity">
              <button
                onClick={() => {
                  handleDownQuantity(item);
                }}
              >
                -
              </button>
              <input type="number" value={item.quantity} readOnly />
              <button
                onClick={() => {
                  handleUpQuantity(item);
                }}
              >
                +
              </button>
            </div>
            <div
              className="buttonDelete"
              onClick={() => {
                handleDeleteItem(item);
              }}
            >
              <CloseOutlined />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default CartItem;
