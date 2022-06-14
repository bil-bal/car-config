import { ProductActionTypes } from "../constants/actionTypes"

const initialState = {
    paints: []
};

const paintReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActionTypes.SET_PAINT_PRODUCTS:
            return {...state, paints : action.payload };
        default:
            return state;
    }
}

export default paintReducer;