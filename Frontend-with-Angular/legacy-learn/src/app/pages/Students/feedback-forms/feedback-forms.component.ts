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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, ProgressComponent, RouterLink],
  templateUrl: './feedback-forms.component.html',
  styleUrl: './feedback-forms.component.css',
})
export class FeedbackFormsComponent {
  feedbackTypes: FeedbackType[] = feedbackTypes;
  selectedFeedbackType: string = '';
  currentQuestionIndex: number = 0;
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      formGroup.addControl(question.name, this.fb.control('', Validators.required));
    });

    this.feedbackForm = formGroup;
  }

  onNext() {
    if (this.feedbackForm.controls[this.currentQuestion.name].valid) {
      this.currentQuestionIndex++;
    } else {
      console.log('Please answer the current question before moving to the next one.');
    }
  }

  onPrev() {
    this.currentQuestionIndex++;
  }

  isCurrentQuestionAnswered(): boolean {
    return this.feedbackForm.controls[this.currentQuestion.name].valid;
  }

  onSubmit() {
    console.log('Form Submiited:', this.feedbackForm.value);
  }
}
