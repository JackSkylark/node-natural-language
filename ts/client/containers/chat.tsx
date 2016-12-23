import * as React from "react";
import * as ReactRedux from "react-redux";
//import * as Redux from "redux";
// Import Components
import ChatThread from "./../components/chat-thread";
import ChatInput from "./../components/chat-input";


export interface IProps {

}

export interface IStateProps {
    currentMessage: string;
    thread: Array<any>;
}

export interface IDispatchProps {
    sendMessage: (message: string) => void;
}

class Chat extends React.Component<IProps & IStateProps & IDispatchProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={"chat"}>
                <ChatThread thread={this.props.thread} />
                <ChatInput/>
            </div>
        );
    }
}

function mapStateToProps(state: any) : IStateProps {
    return {
        currentMessage: state.chat.currentMessage,
        thread: state.chat.thread
    }
}

function mapDispatchToProps(): IDispatchProps {
    return {
        sendMessage: (message: string) => {}
    }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Chat);
