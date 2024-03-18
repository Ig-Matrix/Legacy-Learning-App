import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Course } from '../../../../models/Interfaces/Course';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-course-modal',
  standalone: true,
  imports: [FormsModule, NgClass, ReactiveFormsModule],
  templateUrl: './add-course-modal.component.html',
  styleUrl: './add-course-modal.component.css',
})
export class AddCourseModalComponent {
  @Input() showModal = false; // Flag to control modal visibility (received from parent)
  @Output() courseAdded = new EventEmitter<Course>(); // Event emitter for course
  @Output() closeModalEvent = new EventEmitter();

  courseForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, this.nameValidator]),
    code: new FormControl('', [Validators.required, this.codeValidator]),
    score: new FormControl('', [Validators.required, this.scoreValidator, this.numberValidator]),
    unit: new FormControl('', [Validators.required, this.numberValidator]),
  });

  course: Course = { name: '', code: '', score: 0, unit: 0 }; // New course object

  scoreValidator(control: AbstractControl): ValidationErrors | null {
    const score = control.value;
    if (score < 0 || score > 100) {
      return { scoreRange: 'Score must be between 0 and 100' };
    }
    return null;
  }

  numberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value !== 'number') {
      return { valueType: 'must be a number' };
    }
    return null;
  }

  nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!/^[a-zA-Z]+$/.test(value)) {
      return { nameType: 'name must contain only alphabets' };
    }
    return null;
  }

  
  codeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
      return { codeType: 'course code can contain only numbers, alphabets, hyphen, or underscore' };
    }
    return null;
  }


  closeModal(event: Event) {
    this.showModal = false; // Hide the modal on close button click
    this.course = { name: '', code: '', score: 0, unit: 0 }; // Reset course object
    event.stopPropagation();
    this.closeModalEvent.emit(event);
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydownHandler(event: KeyboardEvent) {
    if (this.showModal) {
      this.closeModal(event);
    }
  }

  submitCourse(event: Event) {
    this.courseAdded.emit(this.courseForm.value); // Emit the course object on submit
    this.closeModal(event); // Close the modal after submission
  }
}
