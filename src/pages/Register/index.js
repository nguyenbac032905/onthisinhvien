import { Modal } from "antd";
import { generateToken } from "../../helpers/generateToken";
import { checkExists, register } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkModalRegister } from "../../actions/checkModal";
import { LockOutlined, SolutionOutlined } from "@ant-design/icons";
import "./register.scss";
function Register() {
  const isModalRegisterOpen = useSelector(
    (state) => state.CheckModalReducer.isModalRegisterOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExistsEmail = await checkExists("email", email);
    if (checkExistsEmail.length > 0) {
      alert("email đã tồn tại");
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(),
      };
      const res = await register(options);
      if (res) {
        navigate("/login");
      } else {
        alert("vui lòng đăng kí lại");
      }
    }
  };
  return (
    <>
      <div className="register">
        <Modal
          open={isModalRegisterOpen}
          onCancel={() => {
            dispatch(checkModalRegister(false));
          }}
          footer={null}
        >
          <div className="register__form">
            <form onSubmit={handleSubmit}>
              <div className="register__header">
                <h2>đăng ký</h2>
              </div>
              <div className="register__body">
                <div className="register__body--input">
                  <SolutionOutlined />
                  <input type="fullName" placeholder="Họ Và Tên"></input>
                </div>
                <div className="register__body--input">
                  <SolutionOutlined />
                  <input type="email" placeholder="email"></input>
                </div>
                <div className="register__body--input">
                  <LockOutlined />
                  <input type="password" placeholder="Mật Khẩu"></input>
                </div>
              </div>
              <div className="register__footer">
                <button type="submit">Đăng Ký</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default Register;
