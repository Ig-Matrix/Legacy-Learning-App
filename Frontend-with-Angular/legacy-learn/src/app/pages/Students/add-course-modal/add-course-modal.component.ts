import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Course } from '../../../../models/Interfaces/Course';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-course-modal',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './add-course-modal.component.html',
  styleUrl: './add-course-modal.component.css',
})
export class AddCourseModalComponent {
  @Input() showModal = false; // Flag to control modal visibility (received from parent)
  @Output() courseAdded = new EventEmitter<Course>(); // Event emitter for course
  @Output() closeModalEvent = new EventEmitter();

  course: Course = { name: '', code: '', score: 0, unit: 0 }; // New course object

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
    this.courseAdded.emit(this.course); // Emit the course object on submit
    this.closeModal(event); // Close the modal after submission
  }
}
