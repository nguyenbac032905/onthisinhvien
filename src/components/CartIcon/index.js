import {ShoppingCartOutlined} from "@ant-design/icons";
import "./cartIcon.scss";
function CartIcon(props) {
    const quantity = props.quantity;
    return(
        <>
        <div className="cartIcon">
            <span className="cartIcon__icon">
                <ShoppingCartOutlined />
            </span>
            <span className="cartIcon__quantity">{quantity}</span>
        </div>
        </>
    )
};
export default CartIcon;