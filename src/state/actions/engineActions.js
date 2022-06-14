import { ProductActionTypes } from "../constants/actionTypes"

export const setEngineProducts = (products) => {
    return {
        type: ProductActionTypes.SET_ENGINE_PRODUCTS,
        payload: products
    };
};