import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import CartIcon from "../CartIcon";
import "./dropdownBar.scss";
function DropdownBar(props) {
  const { token, quantity } = props;
  return (
    <>
      <div className="dropdownBar">
        <Dropdown
          trigger={["click"]}
          dropdownRender={() => (
            <div className="dropdownBar__content">
              <div className="dropdownBar__nav">
                <ul>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  {token && (
                    <>
                      <li>
                        <Link to="/topic">Khóa Học</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="defaultLayout__cart">
                <Link to="/cart">
                  <CartIcon quantity={quantity} />
                </Link>
              </div>
            </div>
          )}
        >
          <div className="dropdownBar__icon">
            <BarsOutlined />
          </div>
        </Dropdown>
      </div>
    </>
  );
}
export default DropdownBar;
