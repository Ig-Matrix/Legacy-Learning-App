import { Component, ChangeDetectorRef  } from '@angular/core';
import { feedbackTypes } from '../../../../models/FeedbackTypes';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FeedbackType } from '../../../../models/Interfaces/Feedback';
import { NgClass } from '@angular/common';
import { ProgressComponent } from '../../../components/progress/progress.component';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faArrowRightLong, faArrowLeftLong, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { HomeNavigationComponent } from '../../../components/home-navigation/home-navigation.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FeedbackService } from '../../../services/FeedbackService/feedback.service';
import { GetFeedbackResponseService } from '../../../services/FeedbackService/get-feedback-response.service';


@Component({
  selector: 'app-feedback-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, ProgressComponent, RouterLink, FontAwesomeModule, HomeNavigationComponent],
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

  model: string = this.selectedFeedbackType;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private feedbackService: FeedbackService,
    private getFeedbackResponseService: GetFeedbackResponseService,
    private cdRef: ChangeDetectorRef
    ) {
    this.feedbackForm = this.fb.group({});
  }

  getResponseForSelectedModel(this: any): {
    model: string;
    feedback: {
      questionId: number,
      question: string,
      answer: string
    }[] } {
      let feedbackResponse: {model: string; feedback:  { questionId: number; question: string; answer: string; }[]; };
      switch (this.selectedFeedbackType) {
      case 'Instructor':
        feedbackResponse = this.getFeedbackResponseService.getInstructorFeedbackResponse(this.feedbackForm);
        break;
      case 'Assessment':
        feedbackResponse = this.getFeedbackResponseService.getAssessmentFeedbackResponse(this.feedbackForm);
        break;
      case 'Course':
        feedbackResponse = this.getFeedbackResponseService.getCourseFeedbackResponse(this.feedbackForm);
        break;
      default:
        feedbackResponse = {model: '', feedback:[] };
    }
    return feedbackResponse;
  }

  selectFeedbackType(event: Event) {
    this.selectedFeedbackType = (event.target as HTMLSelectElement).value;
    this.currentQuestionIndex = 0;
    this.buildForm();
  }

  onModelSelected(model: string) {
    this.model = model;
    // const feedbackResponse = this.getResponseForSelectedModel();
    this.cdRef.detectChanges();
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
  
  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/feedback']);
      this.isLoading=false
      console.log('Form Submitted:', this.feedbackForm.value);
      console.log('Form Submitted:', this.getResponseForSelectedModel());
      this.feedbackService.submitFeedback();
      this.router.navigate(['/feedback']);
    }, 5000);
  }
  
}