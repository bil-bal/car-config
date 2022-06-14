import { ProductActionTypes } from "../constants/actionTypes"

const initialState = {
    optionals: []
};

const optionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActionTypes.SET_OPTIONAL_PRODUCTS:
            return {...state, optionals : action.payload };
        default:
            return state;
    }
}

export default optionalReducer;