// Namespacing
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { ReactRouterReduxHistory } from 'react-router-redux';
// Top-Level
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
// Import Views

// Import Store & History
import {store} from "./redux/store";
import {history} from "./redux/history";

// import containers
import Chat from "./containers/chat";

interface IReachApplicationProps {
    store: Redux.Store<any>;
    history: ReactRouterReduxHistory;
}

class ReachApplication extends React.Component<IReachApplicationProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Router history={this.props.history}>
                        <Route path="/" component={() => <Chat />} />
                    </Router>
                </div>
            </Provider>
        );
    }
}

// Render Application
ReactDOM.render(
    <ReachApplication store={store} history={history}/>,
    document.getElementById('root')
);
