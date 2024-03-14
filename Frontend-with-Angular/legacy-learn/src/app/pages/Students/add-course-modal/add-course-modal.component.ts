import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() courseAdded = new EventEmitter<Course>(); // Event emitter for course data

  course: Course = { name: '', code: '', score: 0, unit: 0 }; // New course object
  
  closeModal() {
    this.showModal = false; // Hide the modal on close button click
    this.course = { name: '', code: '', score: 0, unit: 0 }; // Reset course object
  }
  

  submitCourse() {
    this.courseAdded.emit(this.course); // Emit the course object on submit
    this.closeModal(); // Close the modal after submission
  }
}
