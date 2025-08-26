import { Link } from "react-router-dom";
import {  Dropdown } from "antd";
import "./dropDown.scss";
import { useEffect, useState } from "react";
import { getListUser } from "../../services/usersService"
import { getCookie } from "../../helpers/cookie";
function DropdownUser() {
   const [dataUser, setDataUser] = useState([]);
   const userId = getCookie("id");
    useEffect(() => {
      const fetchApi = async () => {
        const res = await getListUser(userId);
        if (res) {
          setDataUser(res);
        }
      };
      fetchApi();
    }, []);
  return (
    <>
      <Dropdown  dropdownRender={() =>(
        <div className="dropdownUser__dropdown">
            <div className="dropdownUser__header">
                  <Link to="/info-user" className="dropdownUser__header--image"><img src={dataUser.image} /></Link>
                  <Link to="/info-user" className="dropdownUser__header--name">{dataUser.fullName}</Link>
            </div>
            <div className="dropdownUser__body">
                <ul>
                    <li><Link to="/info-user">THÔNG TIN CÁ NHÂN</Link></li>
                    <li><Link to="/answer">LỊCH SỬ HOẠT ĐỘNG</Link></li>
                    <li><Link to="/my-courses">KHÓA HỌC CỦA TÔI</Link></li>
                    <li><Link to="/logout">ĐĂNG XUẤT</Link></li>
                </ul>
            </div>
        </div>
      )} >
        <div className="dropdownUser__image">
            <img src={dataUser.image} />
        </div>
      </Dropdown>
    </>
  );
}
export default DropdownUser;
