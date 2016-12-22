export function trim(tokens: Array<string>) {
    while (tokens[tokens.length - 1] == '')
            tokens.pop();

    while (tokens[0] == '')
        tokens.shift();

    return tokens;
}
