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
    model: string;
    feedback: {
      questionId: number;
      question: string;
      answer: string;
      selectedOption?: {label: string; value: string}
    } []
    } {
    const model = 'Assessment';
    const feedback = AssessmentFeedback.map((question) => {
      const assessmentQuestionControl = assessmentFeedbackForm.get(question.name) as FormControl;
      const selectedOption = assessmentQuestionControl.value;

      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
    return {
      model: model,
      feedback: feedback
    };
  }

  getInstructorFeedbackResponse(instructorFeedbackForm: FormGroup): {
    model: string;
    feedback: {
      questionId: number;
      question: string;
      answer: string;
      selectedOption?: {label: string; value: string}
    } []
    } {
      const model = 'Instructor';
      const feedback = InstructorFeedback.map((question) => {
      const instructorQuestionControl = instructorFeedbackForm.get(question.name) as FormControl;
      const selectedOption = instructorQuestionControl.value;
  
      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
    return {
      model: model,
      feedback: feedback
    };
  }

  getCourseFeedbackResponse(courseFeedbackForm: FormGroup): {
    model: string;
    feedback: {
      questionId: number;
      question: string;
      answer: string;
      selectedOption?: {label: string; value: string}
    } []
    } {
      const model = 'Course';
      const feedback = CourseFeedback.map((question) => {
      const courseQuestionControl = courseFeedbackForm.get(question.name) as FormControl;
      const selectedOption = courseQuestionControl.value;
  
      return {
        questionId: question.id,
        question: question.text,
        answer: selectedOption
      };
    });
    return {
      model: model,
      feedback: feedback
    };
  }
    
}