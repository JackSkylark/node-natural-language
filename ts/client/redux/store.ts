import * as Redux from "redux";
import thunkMiddleware from "./middleware/thunk";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import Reducer from "./reducer";

const routerMiddleware = createRouterMiddleware(browserHistory);

const middlewares =
    Redux.applyMiddleware(
        routerMiddleware,
        thunkMiddleware        
        );

export const store = Redux.createStore(
    Reducer,
    Redux.compose(
        middlewares,
        getReduxTooling(window)
    )
)

function identity(x: any) {
    return x;
}

function getReduxTooling(root: any) {
    return root.devToolsExtension
        ? root.devToolsExtension()
        : identity;
}
