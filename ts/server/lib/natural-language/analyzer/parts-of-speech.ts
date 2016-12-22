export enum PartsOfSpeech {
    Noun,
    Pronoun,
    Adjective,
    Adverb,
    Conjunction,
    Interjection,
    Preposition,
    Verb,
    Article
}

export function fromString(pos: string) {
    const firstLetter = pos.charAt(0);

    switch(firstLetter) {
        case "N":
            return PartsOfSpeech.Noun;
        case "V":
            return PartsOfSpeech.Verb;
        case "J":
            return PartsOfSpeech.Adjective;
        case "R":
            return PartsOfSpeech.Adverb;
        case "U":
            return PartsOfSpeech.Interjection;
        default:
            return PartsOfSpeech.Preposition;
    }
}
