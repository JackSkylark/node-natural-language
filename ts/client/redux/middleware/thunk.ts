import {MiddlewareAPI, Dispatch} from "redux";

export default <S>({dispatch, getState}: MiddlewareAPI<S>) =>
    (next: Dispatch<S>) =>
        (action: any): any => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            return next(action);
        };
        