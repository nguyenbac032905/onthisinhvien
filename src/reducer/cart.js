const cartReducer = (state = [], action) => {
    let newState = state;
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...newState,{
                    id:action.info.id,
                    info:action.info,
                    quantity:1
                }
            ]
        case "UPDATE_QUANTITY":
            return newState.map(item => item.id === action.info.id ? {...item,quantity: item.quantity + action.quantity } : {...item})
        case "DELETE_ITEM":
            newState = newState.filter(item => item.info.id !== action.info.id)
            return newState
        default:
            return state;
    }
};
export default cartReducer;