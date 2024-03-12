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
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-feedback-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass],
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
      // const control =
      //   question.options.length > 1
      //     ? this.fb.control(null, Validators.required)
      //     : this.fb.control('');
      formGroup.addControl(question.name, this.fb.control(''));
    });

    this.feedbackForm = formGroup;
  }

  onNext() {
    this.currentQuestionIndex++;
  }

  onPrev() {
    this.currentQuestionIndex++;
  }

  onSubmit() {
    console.log('Form Submiited:', this.feedbackForm.value);
  }
}
