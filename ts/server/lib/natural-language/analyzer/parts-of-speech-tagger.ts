let pos = require("pos");
import {fromString, PartsOfSpeech} from "./parts-of-speech";


export function tag(words: Array<string>): Array<{word: string, pos: PartsOfSpeech}>  {
    const tagger = new pos.Tagger();
    const taggedWords: Array<any> = tagger.tag(words);

    return taggedWords.map(x => ({
        word: x[0],
        pos: fromString(x[1])
    }));
}

