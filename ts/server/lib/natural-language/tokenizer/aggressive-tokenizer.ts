import {trim} from "./utilities";

export default (text: string) => {
    // break a string up into an array of tokens by anything non-word
    return trim(text.split(/\W+/));
};
