//import ActionCreatorFactory from "./../utilities/redux-actions";
//import {isType} from "./../utilities/redux-actions";
import * as Redux from "redux";

// const actionCreator = ActionCreatorFactory("jds.chat.");
// const sampleAction = actionCreator("sample");
// console.log(sampleAction());

interface IChatMessages {
    sender: string;
    sendTime: Date;
    message: string;
}

interface IChatState {
    thread: Array<IChatMessages>
    currentMessage: string;
}

const initialChatState: IChatState = {
    currentMessage: "What's on the agenda today?",
    thread: [
        {
            sender: "John Slaughter",
            sendTime: new Date(2016, 12, 23, 13, 9, 20),
            message: "Hello. Are you there?"
        },
        {
            sender: "HAL 9000",
            sendTime: new Date(2016, 12, 23, 13, 10, 20),
            message: "Hi John. I am here. How are you?"
        },
        {
            sender: "John Slaughter",
            sendTime: new Date(2016, 12, 23, 13, 9, 20),
            message: "I'm good HAL. Just checking in."
        }
    ]
}

export default (state: any = initialChatState, action: Redux.Action) => {
    return state;
}
