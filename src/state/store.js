import { applyMiddleware, legacy_createStore, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunk,
];

export const store = legacy_createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);