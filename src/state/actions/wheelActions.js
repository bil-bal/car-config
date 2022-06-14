import { ProductActionTypes } from "../constants/actionTypes"

export const setWheelProducts = (products) => {
    return {
        type: ProductActionTypes.SET_WHEEL_PRODUCTS,
        payload: products
    };
};