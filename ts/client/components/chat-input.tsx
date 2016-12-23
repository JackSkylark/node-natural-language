import * as React from "react";

export default class ChatInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    } 

    render() {
        return(
            <section className={"chat-window"}>
                <input className={"chat-window-message"} type={"text"} autoComplete={"off"}/>
            </section>
        );
    }
}
