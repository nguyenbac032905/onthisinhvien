export const addToCart = (info) => {
    return{
        type: "ADD_TO_CART",
        info:info
    };
};

export const updateCartQuantity = (info,quantity = 1) => {
    return{
        type: "UPDATE_QUANTITY",
        info:info,
        quantity:quantity
    };
};

export const deleteItem = (info) => {
    return{
        type: "DELETE_ITEM",
        info:info
    };
};