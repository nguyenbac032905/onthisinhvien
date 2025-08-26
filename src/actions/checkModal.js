export const checkModalLogin = (statusLogin) => {
    return{
        type: "CHECK_MODAL_LOGIN",
        statusLogin:statusLogin
    };
};

export const checkModalRegister = (statusRegister) => {
    return{
        type: "CHECK_MODAL_REGISTER",
        statusRegister:statusRegister
    };
};