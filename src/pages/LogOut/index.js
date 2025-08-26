import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { checkLogin } from "../../actions/checkLogin";
function LogOut() {
    const isLogin = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    deleteAllCookies();
    useEffect(() => {
        dispatch(checkLogin(false));
         navigate("/login");
    },[])
    return(
        <>
        
        </>
    )
};
export default LogOut;