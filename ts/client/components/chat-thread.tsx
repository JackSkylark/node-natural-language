import * as React from "react";
import ChatThreadItem from "./chat-thread-item";

export interface IChatMessage {
    sender: string;
    sentTime: string;
    message: string;
}

export interface IProps {
    thread: Array<IChatMessage>;
}

export default class ChatInput extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <section className={"chat-thread"}>
                {
                    this.props.thread.map((message, index) => {
                        return <ChatThreadItem key={index} name={message.sender} time={message.sentTime} message={message.message}/>;
                    })
                }
            </section>
        );
    }
}
