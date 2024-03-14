import { Component } from '@angular/core';
import { Course } from '../../../../models/Interfaces/Course';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';

@Component({
  selector: 'app-student-portfolio',
  standalone: true,
  imports: [AddCourseModalComponent],
  templateUrl: './student-portfolio.component.html',
  styleUrl: './student-portfolio.component.css',
})
export class StudentPortfolioComponent {
  courses: Course[] = []; // Array to store course data
  showModal: boolean = false; // Flag to control modal visibility

  openAddCourseModal() {
    this.showModal = true; // Open the modal on button click
  }

  addCourse(course: Course) {
    course.grade=this.calculateGrade(course.score)
    this.courses.push(course);
    // console.log(course);
    // Add new course to the array
    this.showModal = false; // Close the modal after adding
  }

  calculateGrade(score: number): string {
    if (score >= 70) {
      return 'A';
    } else if (score >= 60) {
      return 'B';
    } else if (score >= 50) {
      return 'C';
    } else if (score >= 45) {
      return 'D';
    } else if (score >= 40) {
      return 'E';
    } else {
      return 'F';
    }
  }
}
