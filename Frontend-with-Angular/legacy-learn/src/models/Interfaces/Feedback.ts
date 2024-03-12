export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: number;
  text: string;
  name: string;
  options: QuestionOption[];
}

export interface FeedbackType {
  label: string;
  value: string;
  questions: Question[];
}
