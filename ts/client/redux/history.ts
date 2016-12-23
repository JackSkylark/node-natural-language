import { browserHistory } from "react-router";
import * as ReactRouterRedux from 'react-router-redux';

import { store } from "./store";

export const history = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);
