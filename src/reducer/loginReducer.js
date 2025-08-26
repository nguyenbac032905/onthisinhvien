const loginReducer = (state = false, action) => {
    switch (action.type) {
        case "CHECK_LOGIN":
            state = action.status;
            return state;
        default:
            return state;
    }
};
export default loginReducer;