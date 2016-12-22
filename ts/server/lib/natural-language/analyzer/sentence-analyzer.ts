import {PartsOfSpeech} from "./parts-of-speech";
import {tag} from "./parts-of-speech-tagger";
import {AggressiveTokenizer} from "./../tokenizer";

enum SentenceTypes {
    Interrogative,
    Command,
    Exclamatory,
    Declarative,
    Unknown
}

interface sentenceAnalysis {

}

export const analyzeSentence = (sentence: string): sentenceAnalysis => {

    

}
