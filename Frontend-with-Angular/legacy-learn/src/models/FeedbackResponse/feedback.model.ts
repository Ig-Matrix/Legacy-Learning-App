export class FeedbackResponse {
    model: string;
    questions: { [questionId: number]: { question: string; answer: string; }; }[];
    
    constructor(
        model: string,
        questions: {
            [questionId: number]: {question: string;
            answer: string}
        }[],
    ) {
        this.model = model;
        this.questions = questions;
    }    
}