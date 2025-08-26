import { Button, Form, Input, notification, Spin } from "antd";
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { editUser, getListUser } from "../../services/usersService";
import "./infoUser.scss";
function InfoUser() {
  const [form] = Form.useForm();
  const userId = getCookie("id");
  const [dataUser, setDataUser] = useState([]);
  const [isDisabled, setDisabled] = useState(true);
  const [api, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getListUser(userId);
      setDataUser(res);
      if (res) {
        form.setFieldsValue(res);
      }
    };
    fetchApi();
  }, []);

  const handleSubmit = async (e) => {
    const res = await editUser(userId, e);
    setSpinning(true);
    setTimeout(() => {
      if (res) {
        api.success({
          message: `Cập Nhật Thành Công`,
          description: `Bạn đã cập nhật thông tin tài khoản : ${e.fullName}`,
          duration: 3,
        });
        setSpinning(false);
      } else {
        api.error({
          message: `Cập Nhật Không Thành Công`,
          description: `Vui lòng thử lại sau`,
        });
      }
    }, 3000);
  };
  return (
    <>
      <div className="infoUser">
        <div className="container">
          {contextHolder}
          <div className="infoUser__main">
            <div className="infoUser__info">
              <div className="infoUser__info--image">
                <img src={dataUser.image} />
              </div>
              <div className="infoUser__info--name">{dataUser.fullName}</div>
              <div className="infoUser__info--button">
                <Button
                  onClick={() => {
                    setDisabled(!isDisabled);
                  }}
                >
                  SỬA THÔNG TIN
                </Button>
              </div>
            </div>
            <div className="infoUser__form">
              <Spin spinning={spinning} tip="Đang Cập Nhật....">
                <Form
                  form={form}
                  name="InfoUser"
                  layout="vertical"
                  className="infoUser"
                  onFinish={handleSubmit}
                >
                  <div className="infoUser__form--title">
                    <h2>Thông tin tài khoản:</h2>
                  </div>

                  <Form.Item
                    className="infoUser__item"
                    name="fullName"
                    label="Họ Và Tên"
                  >
                    <Input disabled={isDisabled}></Input>
                  </Form.Item>

                  <Form.Item
                    className="infoUser__item"
                    name="email"
                    label="Email"
                  >
                    <Input disabled={isDisabled}></Input>
                  </Form.Item>

                  <Form.Item
                    className="infoUser__item"
                    name="password"
                    label="Mật Khẩu"
                  >
                    <Input type="password" disabled={isDisabled}></Input>
                  </Form.Item>

                  <Form.Item
                    className="infoUser__item"
                    name="image"
                    label="Đường Dẫn Ảnh"
                  >
                    <Input disabled={isDisabled}></Input>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className={isDisabled ? "buttonHidden" : ""}
                      type="primary"
                      htmlType="submit"
                    >
                      CẬP NHẬT
                    </Button>
                  </Form.Item>
                </Form>
              </Spin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InfoUser;
