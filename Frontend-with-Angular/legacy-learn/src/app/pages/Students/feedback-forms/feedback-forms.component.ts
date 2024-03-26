import { Component, ChangeDetectorRef  } from '@angular/core';
import { feedbackTypes } from '../../../../models/FeedbackTypes';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FeedbackType } from '../../../../models/Interfaces/Feedback';
import { NgClass } from '@angular/common';
import { ProgressComponent } from '../../../components/progress/progress.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faArrowRightLong, faArrowLeftLong, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { HomeNavigationComponent } from '../../../components/home-navigation/home-navigation.component';
import { FeedbackService } from '../../../services/FeedbackService/feedback.service';

interface FeedbackData {
  modelChosen: string;
  responseChosen: any;
}

@Component({
  selector: 'app-feedback-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, ProgressComponent, RouterLink, RouterLinkActive, FontAwesomeModule, HomeNavigationComponent],
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
    private feedbackService: FeedbackService,
    ) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
    });
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


  onSubmit() {
    this.isLoading = true;
    const modelChosen = this.selectedFeedbackType;
    const responseChosen = this.feedbackForm.value;

    const constructedFeedback: FeedbackData  = {modelChosen, responseChosen};

    console.log("Feedback to be submitted: ", constructedFeedback);
    this.feedbackService.submitFeedback(constructedFeedback)
    .subscribe(response => {
      this.isLoading = false;
        console.log("Feedback submitted successfully: ", response);
        this.router.navigate(['/feedback']);
      }, error => {
        this.isLoading = false;
        console.log("Feedback error: ", error);
        this.router.navigate(['/feedback']);
      });
  }
}