import { ResultActionTypes } from "../constants/actionTypes"

export const setPrice = (amount) => {
    return {
        type: ResultActionTypes.SET_PRICE,
        payload: amount
    };
};

export const addPrice = (amount) => {
    return {
        type: ResultActionTypes.ADD_PRICE,
        payload: amount
    };
};

export const removePrice = (amount) => {
    return {
        type: ResultActionTypes.REMOVE_PRICE,
        payload: amount
    };
};

export const selectEngine = (engine) => {
    return {
        type: ResultActionTypes.ENGINE_SELECTED,
        payload: engine
    };
};

export const deselectEngine = () => {
    return {
        type: ResultActionTypes.ENGINE_DESELECTED
    };
};

export const selectPaint = (paint) => {
    return {
        type: ResultActionTypes.PAINT_SELECTED,
        payload: paint
    };
};

export const deselectPaint = () => {
    return {
        type: ResultActionTypes.PAINT_DESELECTED
    };
};

export const selectWheel = (paint) => {
    return {
        type: ResultActionTypes.WHEEL_SELECTED,
        payload: paint
    };
};

export const deselectWheel = () => {
    return {
        type: ResultActionTypes.WHEEL_DESELECTED
    };
};

export const selectOptional = (paint) => {
    return {
        type: ResultActionTypes.OPTIONAL_SELECTED,
        payload: paint
    };
};

export const deselectOptional = () => {
    return {
        type: ResultActionTypes.OPTIONAL_DESELECTED
    };
};

export const setOrderComplete = (isComplete) => {
    return {
        type: ResultActionTypes.SET_ORDER_COMPLETE,
        payload: isComplete
    };
};