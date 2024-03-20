import { Component } from '@angular/core';
import { feedbackTypes } from '../../../../models/FeedbackTypes';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { FeedbackType } from '../../../../models/Interfaces/Feedback';
import { NgClass } from '@angular/common';
import { ProgressComponent } from '../../../components/progress/progress.component';
import { Router, RouterLink } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightLong,
  faArrowLeftLong,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { HomeNavigationComponent } from '../../../components/home-navigation/home-navigation.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FeedbackService } from '../../../services/FeedbackService/feedback.service';
import { GetFeedbackResponseService } from '../../../services/FeedbackService/get-feedback-response.service';

interface FeedbackResponse {
  model: string;
  questions: { [questionId: number]: { question: string; answer: string } }[];
}

@Component({
  selector: 'app-feedback-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass,
    ProgressComponent,
    RouterLink,
    FontAwesomeModule,
    HomeNavigationComponent
  ],
  templateUrl: './feedback-forms.component.html',
  styleUrl: './feedback-forms.component.css',
})

export class FeedbackFormsComponent {
  feedbackTypes: FeedbackType[] = feedbackTypes;
  selectedFeedbackType: string = '';
  currentQuestionIndex: number = 0;
  feedbackForm: FormGroup;
  faArrowRightLong = faArrowRightLong;
  faArrowLeftLong = faArrowLeftLong;
  faPaperPlane = faPaperPlane;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
  model: string = '';
  // for feedback response from feedback forms...
  questions: {
    questionId: number;
     question: string;
      answer: string
    } [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private feedbackService: FeedbackService,
    private getFeedbackResponseService: GetFeedbackResponseService
    ) {
    this.feedbackForm = this.fb.group({});
    this.questions = this.getResponseForSelectedModel();
  }

  getResponseForSelectedModel(): {
    questionId: number,
    question: string,
    answer: string
  }[] {
    switch (this.model) {
      case 'Instructor':
        return this.getFeedbackResponseService.getInstructorFeedbackResponse(this.feedbackForm);
      case 'Assessment':
        return this.getFeedbackResponseService.getAssessmentFeedbackResponse(this.feedbackForm);
      case 'Course':
        return this.getFeedbackResponseService.getCourseFeedbackResponse(this.feedbackForm);
      default:
        return [];
    }
  }

  selectFeedbackType(event: Event) {
    this.selectedFeedbackType = (event.target as HTMLSelectElement).value;
    this.currentQuestionIndex = 0;
    this.buildForm();
  }

  onModelSelected(model: string) {
    this.selectedFeedbackType = model;
  }

  get currentQuestion() {
    const questions = this.getSelectedFeedbackType().questions;
    return questions[this.currentQuestionIndex] || null;
  }

  getSelectedFeedbackType(): FeedbackType {
    return this.feedbackTypes.find(
      (type) => type.value === this.selectedFeedbackType
    )!;
  }

  buildForm() {
    const questions = this.getSelectedFeedbackType().questions;
    const formGroup = this.fb.group({});

    questions.forEach((question) => {
      formGroup.addControl(
        question.name,
        this.fb.control('', Validators.required)
      );
    });

    this.feedbackForm = formGroup;
  }

  onNext() {
    if (this.feedbackForm.controls[this.currentQuestion.name].valid) {
      this.currentQuestionIndex++;
    } else {
      console.log(
        'Please answer the current question before moving to the next one.'
      );
    }
  }

  onPrev() {
    this.currentQuestionIndex--;
  }

  isCurrentQuestionAnswered(): boolean {
    return this.feedbackForm.controls[this.currentQuestion.name].valid;
  }
  
   constructFeedbackData(this: any): FeedbackResponse {

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
  

  feedbackData = this.constructFeedbackData();

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Form Submiited:', this.feedbackForm.value);
      this.router.navigate(['/feedback']);
      this.isLoading=false
      console.log('Form Submitted:', this.feedbackForm.value);
      this.feedbackService.submitFeedback();
      this.router.navigate(['/feedback']);
    }, 5000);
  }
  
}