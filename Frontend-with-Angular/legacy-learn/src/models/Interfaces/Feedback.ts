type QuestionOption = {
  label: string;
  value: string;
};

type Question = {
  id: number;
  text: string;
  options: QuestionOption[];
};

type FeedbackType = {
  label: string;
  value: string;
  questions: Question[];
};
