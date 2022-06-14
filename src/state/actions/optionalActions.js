import { ProductActionTypes } from "../constants/actionTypes"

export const setOptionalProducts = (products) => {
    return {
        type: ProductActionTypes.SET_OPTIONAL_PRODUCTS,
        payload: products
    };
};