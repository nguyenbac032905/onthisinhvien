const initialState = {
  isModalLoginOpen: false,
  isModalRegisterOpen: false,
};
const CheckModalReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "CHECK_MODAL_LOGIN":
      newState = {
        ...state,
        isModalLoginOpen: action.statusLogin,
      };
      return newState;
    case "CHECK_MODAL_REGISTER":
      newState = {
        ...state,
        isModalRegisterOpen: action.statusRegister,
      };
      return newState;
    default:
      return state;
  }
};
export default CheckModalReducer;
