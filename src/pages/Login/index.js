import { setCookie } from "../../helpers/cookie";
import { getLogin } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/checkLogin";
import { Modal } from "antd";
import { checkModalLogin } from "../../actions/checkModal";
import { LockOutlined, SolutionOutlined } from "@ant-design/icons";
import "./login.scss";
function Login() {
  const isModalLoginOpen = useSelector(
    (state) => state.CheckModalReducer.isModalLoginOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await getLogin(e.target[0].value, e.target[1].value);
    if (res.length > 0) {
      dispatch(checkLogin(true));
      setCookie("id", res[0].id, 1);
      setCookie("fullName", res[0].fullName, 1);
      setCookie("email", res[0].email, 1);
      setCookie("token", res[0].token, 1);
      setCookie("image", res[0].image, 1);
      navigate("/");
    } else {
      alert("Sai thông tin tài khoản");
    }
  };
  return (
    <>
      <div className="login">
        <Modal
          open={isModalLoginOpen}
          onCancel={() => {
            dispatch(checkModalLogin(false));
          }}
          footer={null}
        >
          <div className="login__form">
            <form onSubmit={handleLogin}>
              <div className="login__header">
                <h2>đăng nhập</h2>
              </div>
              <div className="login__body">
                <div className="login__body--input">
                  <SolutionOutlined />
                  <input type="email" placeholder="email"></input>
                </div>
                <div className="login__body--input">
                  <LockOutlined />
                  <input type="password" placeholder="mật khẩu"></input>
                </div>
              </div>
              <div className="login__footer">
                <button type="submit">Đăng Nhập</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default Login;
