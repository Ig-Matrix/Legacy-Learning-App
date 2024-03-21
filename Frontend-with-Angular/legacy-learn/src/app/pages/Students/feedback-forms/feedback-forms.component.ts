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
import { FeedbackResponse } from '../../../../models/FeedbackResponse/feedback-response.model';


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


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private feedbackService: FeedbackService,
    ) {
    this.feedbackForm = this.fb.group({});
  }

  selectFeedbackType(event: Event) {
    this.selectedFeedbackType = (event.target as HTMLSelectElement).value;
    this.currentQuestionIndex = 0;
    this.buildForm();
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

  getFeedbackResponse(): FeedbackResponse {
    const modelChosen = this.selectedFeedbackType;
    const responseChosen = this.feedbackForm.value;
    return {modelChosen, responseChosen};
  }


  onSubmit() {
    this.isLoading = true;
    const feedbackResponse = this.getFeedbackResponse();

    this.feedbackService.submitFeedback(feedbackResponse);
    console.log("Feedback submitted successfully: ", feedbackResponse);
    this.isLoading = false;
    this.router.navigate(['/feedback']);
    }
}