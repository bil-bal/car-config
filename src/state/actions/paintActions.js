import { ProductActionTypes } from "../constants/actionTypes"

export const setPaintProducts = (products) => {
    return {
        type: ProductActionTypes.SET_PAINT_PRODUCTS,
        payload: products
    };
};