import {Outlet,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRouter() {
    const isLogin = true;
    return(
        <>
            {isLogin ? (<Outlet />) : (<Navigate to = "/login" />)}
        </>
    )
};
export default PrivateRouter;