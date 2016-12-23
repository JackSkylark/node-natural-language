import * as Redux from "redux";
import { routerReducer } from "react-router-redux";
import ChatReducer from "./reducers/chat";

export default Redux.combineReducers({
    routing: routerReducer,
    chat: ChatReducer
});
