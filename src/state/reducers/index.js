import { combineReducers } from "redux";
import engineReducer from "./engineReducer";
import optionalReducer from "./optionalReducer";
import paintReducer from "./paintReducer"
import resultReducer from "./resultReducer";
import wheelReducer from "./wheelReducer";

const reducers = combineReducers({
    engines: engineReducer,
    paints: paintReducer,
    wheels: wheelReducer,
    optionals: optionalReducer,
    result: resultReducer
});

export default reducers;