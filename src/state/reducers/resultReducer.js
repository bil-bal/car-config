import { ResultActionTypes } from "../constants/actionTypes";

const initialState = { selectedEngine : null,
selectedPaint: null,
selectedWheel: null,
selectedOptional: null,
result: 0
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ResultActionTypes.ADD_PRICE:
            return {...state, result: state.result + action.payload};
        case ResultActionTypes.REMOVE_PRICE:
            return {...state, result: state.result - action.payload};
        case ResultActionTypes.ENGINE_SELECTED:
            return {...state, selectedEngine: action.payload};
        case ResultActionTypes.ENGINE_DESELECTED:
            return {...state, selectedEngine: null };
        case ResultActionTypes.PAINT_SELECTED:
            return {...state, selectedPaint: action.payload};
        case ResultActionTypes.PAINT_DESELECTED:
            return {...state, selectedPaint: null };
        case ResultActionTypes.WHEEL_SELECTED:
            return {...state, selectedWheel: action.payload};
        case ResultActionTypes.WHEEL_DESELECTED:
            return {...state, selectedWheel: null };
        case ResultActionTypes.OPTIONAL_SELECTED:
            return {...state, selectedOptional: action.payload};
        case ResultActionTypes.OPTIONAL_DESELECTED:
            return {...state, selectedOptional: null };
        default:
            return state;
    }
}

export default resultReducer;