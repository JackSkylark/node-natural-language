import {trim} from "./utilities";

export default (text: string) => {
    // break string up in to sentences based on punctation and quotation marks
    var tokens = text.match(/([\"\'\‘\“\'\"\[\(\{\⟨][^\.\?\!]+[\.\?\!][\"\'\’\”\'\"\]\)\}\⟩]|[^\.\?\!]+[\.\?\!])\s?/g);

    // if no tokens 
    if(tokens == null) return [text];

    // remove unecessary white space
    tokens = tokens.map(Function.prototype.call, String.prototype.trim);
    return trim(tokens);
}
