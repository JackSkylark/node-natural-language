import * as React from "react";

export interface IProps {
    name: string;
    time: string;
    message: string;
}

export default class ChatThreadMessage extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    } 

    render() {
        return(
            <article className={"chat-thread-message"}>
                <div className={"chat-thread-message-content"}>
                    <h5 className={"name"}>{this.props.name}</h5>
                    <span className={"time"}>{this.props.time}</span>
                    <p className={"message"}>{this.props.message}</p>
                </div>
            </article>
        );
    }
}
