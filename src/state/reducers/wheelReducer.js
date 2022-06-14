import { ProductActionTypes } from "../constants/actionTypes"

const initialState = {
    wheels: []
};

const wheelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActionTypes.SET_WHEEL_PRODUCTS:
            return {...state, wheels : action.payload };
        default:
            return state;
    }
}

export default wheelReducer;