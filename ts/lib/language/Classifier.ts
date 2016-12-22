export interface ITokenizer {
    trim: (array: Array<any>) => Array<any>;
    tokenize: (text: string) => Array<any>;
}

export interface IClassifier {
    addExample: (observation: any, classification: any) => void;
    train: () => void;
    classify: (observation: any) => void;

}

export class BayesClassifier implements IClassifier {
    features: {[key: string]: any};
    totals: {[key: string]: number};
    examples: number;
    smoothing: number;

    constructor(smoothing: number) {
        this.features = {};
        this.totals = {};
        this.examples = 1;
        this.smoothing = 1;
    }

    addExample(observation: string, classification: string) {
        if(!this.features[classification]) {
            this.features[classification] = {};
            this.totals[classification] = 1;
        }

        
    }

}



export class AggressiveTokenizer implements ITokenizer {
    tokenize = (text: string) => {
        // break a string up into an array of tokens by anything non-word
        return this.trim(text.split(/\W+/));
    }

    trim = (array: Array<any>) => {
        return array;
    }
}

export class Classifier {
    documents: Array<any>;
    features: any;

    addDocument(text: string, classification: string) {
        this.documents.push({
            label: classification,
            text: text
        });

        for (var i = 0; i < text.length; i++) {
            var token = text[i];
            this.features[token] = (this.features[token] || 0) + 1;
        }
    }


}