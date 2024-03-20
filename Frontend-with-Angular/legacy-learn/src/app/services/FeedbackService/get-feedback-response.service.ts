import { Injectable } from '@angular/core';
import { AssessmentFeedback } from '../../../models/FeedbackQuestions/AssessmentFeedback';
import { FormControl, FormGroup } from '@angular/forms';
import { InstructorFeedback } from '../../../models/FeedbackQuestions/InstructorFeedback';
import { CourseFeedback } from '../../../models/FeedbackQuestions/CourseFeedback';

@Injectable({
  providedIn: 'root'
})
export class GetFeedbackResponseService {

  constructor() { }

  getAssessmentFeedbackResponse(assessmentFeedbackForm: FormGroup): {
    questionId: number;
    question: string;
    answer: string;
    selectedOption?: {label: string; value: string}
  } [] {
    return AssessmentFeedback.map((question) => {
      const assessmentQuestionControl = assessmentFeedbackForm.get(question.name) as FormControl;
      const selectedOption = assessmentQuestionControl.value;
  
      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
  }

  getInstructorFeedbackResponse(instructorFeedbackForm: FormGroup): {
    questionId: number;
    question: string;
    answer: string;
    selectedOption?: {label: string; value: string}
  } [] {
    return InstructorFeedback.map((question) => {
      const instructorQuestionControl = instructorFeedbackForm.get(question.name) as FormControl;
      const selectedOption = instructorQuestionControl.value;
  
      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
  }

  getCourseFeedbackResponse(courseFeedbackForm: FormGroup): {
    questionId: number;
    question: string;
    answer: string;
    selectedOption?: {label: string; value: string}
  } [] {
    return CourseFeedback.map((question) => {
      const courseQuestionControl = courseFeedbackForm.get(question.name) as FormControl;
      const selectedOption = courseQuestionControl.value;
  
      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
  }
    
}