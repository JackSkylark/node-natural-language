export interface IClassifier {
    addExample: (observation: any, classification: any) => void;
    train: () => void;
    classify: (observation: any) => void;
}
