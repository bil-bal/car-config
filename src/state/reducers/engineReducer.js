import { ProductActionTypes } from "../constants/actionTypes"

const initialState = {
    engines: []
};

const engineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActionTypes.SET_ENGINE_PRODUCTS:
            return {...state, engines : action.payload };
        default:
            return state;
    }
}

export default engineReducer;