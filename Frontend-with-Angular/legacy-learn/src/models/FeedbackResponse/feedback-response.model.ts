export interface FeedbackResponse {
    modelChosen: string;
    responseChosen: {
        name: string;
        value: string;
    } [];
}