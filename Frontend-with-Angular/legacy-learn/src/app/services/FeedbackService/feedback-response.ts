import { FormGroup } from "@angular/forms";

interface FeedbackResponse {
    model: string;
    questions: { [questionId: number]: { question: string; answer: string } }[];
  }
  
  export function constructFeedbackData(this: any): FeedbackResponse {

    const feedbackFunction = this['get' + this.model + 'FeedbackResponse'] as (form: FormGroup) => { questionId: number; question: string; answer: string; selectedOption?: { label: string; value: string } }[];
    const feedback = feedbackFunction(this.feedbackForm);
  
    // Ensure type compatibility for 'reduce':
    const feedBackResponseToQuestions: { [questionId: number]: { question: string; answer: string } } = feedback.reduce(
        (acc: { [questionId: number]: { question: string; answer: string } } = {}, item) => {
    acc[item.questionId] = { question: item.question, answer: item.answer };
    return acc;
    }, {});
  
    return { model: this.model, questions: [feedBackResponseToQuestions] }; 
    
  }
  