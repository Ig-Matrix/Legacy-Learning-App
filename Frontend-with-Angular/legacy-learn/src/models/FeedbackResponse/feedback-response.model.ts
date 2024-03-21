export interface FeedbackResponse {
    model: string;
    questions: {
        name: string;
        value: string;
    } [];
}