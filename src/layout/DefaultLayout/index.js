import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import "./defaultLayout.scss";
import { getCookie } from "../../helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import DropdownUser from "../../components/DropDown";
import CartIcon from "../../components/CartIcon";
import Login from "../../pages/Login";
import { checkModalLogin, checkModalRegister } from "../../actions/checkModal";
import Register from "../../pages/Register";
import DropdownBar from "../../components/DropDownBar";
function DefaultLayout() {
  const dispatch = useDispatch();
  let token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);
  const cart = useSelector((state) => state.cartReducer);
  const quantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const showModalLogin = () => {
    dispatch(checkModalLogin(true));
  };
  const showModalRegister = () => {
    dispatch(checkModalRegister(true));
  };
  return (
    <>
      <div className="defaultLayout">
        <div className="defaultLayout__header">
          <div className="container">
            <div className="defaultLayout__logo">
              <div className="defaultLayout__logo-image">
                <Link to="/">
                  <img
                    src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Flogo-otsv.png&w=128&q=75"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="defaultLayout__logo-text">
                <p>Ôn thi nhàn,Kết quả cao</p>
              </div>
            </div>
            <div className="defaultLayout__content">
              <div className="defaultLayout__nav">
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
              <div className="defaultLayout__bar"><DropdownBar token={token} quantity={quantity}/></div>
              <div className="defaultLayout__account">
                {token ? (
                  <>
                    <DropdownUser />
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <div className="defaultLayout__account--login">
                        <button onClick={showModalLogin}>ĐĂNG NHẬP</button>
                        <Login />
                      </div>
                    </Link>
                    <Link to="/register">
                      <div className="defaultLayout__account--logout">
                        <button onClick={showModalRegister}>ĐĂNG KÝ</button>
                        <Register />
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="defaultLayout__main">
          <Outlet />
        </div>
        <div className="defaultLayout__footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default DefaultLayout;
