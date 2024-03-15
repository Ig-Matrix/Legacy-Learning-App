import { Component } from '@angular/core';
import { Course } from '../../../../models/Interfaces/Course';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import { FormsModule } from '@angular/forms';
import { faCheck, faLessThan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-student-portfolio',
  standalone: true,
  imports: [ RouterLink, AddCourseModalComponent,  FormsModule, FontAwesomeModule, NgClass],
  templateUrl: './student-portfolio.component.html',
  styleUrl: './student-portfolio.component.css',
})
export class StudentPortfolioComponent {
  courses: Course[] = []; // Array to store course data
  showModal: boolean = false; // Flag to control modal visibility
  cgpa: number | null = null; // CGPA property to store calculated value
  editingCourseIndex: number | null = null; // Track the index of the course being edited
  trackingIndex: number = 1;
  faBackward = faLessThan
  check=faCheck
  cancel=faXmark;

  openAddCourseModal() {
    this.showModal = !this.showModal; // Open the modal on button click
  }

  addCourse(course: Course) {
    course.grade = this.calculateGrade(course.score);
    this.trackingIndex++;
    this.courses.push(course); // Add new course to the array
    this.cgpa = null;
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

  calculateCGPA(): number | null {
    if (!this.courses.length) {
      return null; // No courses for calculation
    }

    let totalCreditPoints = 0;
    let totalQualityPoints = 0;

    for (const course of this.courses) {
      const gradePoints = this.getGradePoints(course.score);
      if (gradePoints !== null) {
        totalCreditPoints += course.unit;
        totalQualityPoints += gradePoints * course.unit;
      }
    }

    this.cgpa = totalQualityPoints / totalCreditPoints || null;
    console.log(this.cgpa);
    
    return totalQualityPoints / totalCreditPoints || null; // Handle division by zero
  }

  getGradePoints(score: number): number | null {
    const gradeMap = {
      '70-100': 5.0,
      '60-69': 4.0,
      '50-59': 3.0,
      '45-49': 2.0,
      '40-44': 1.0,
      '0-39': 0.0,
    };

    const gradeRange = Object.keys(gradeMap).find((range) => {
      const [min, max] = range.split('-').map(Number);
      return score >= min && score <= max;
    });

    return gradeRange ? gradeMap[gradeRange as keyof typeof gradeMap] : null;
  }

  deleteCourse(course: Course) {
    const courseIndex = this.courses.findIndex((c) => c === course); //find the index of that course
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1); //remove that course from the array
      this.cgpa = null; // invalidatee cgpa
    }
  }

  editCourse(course: Course, index: number) {
    this.editingCourseIndex = index; // Set the editing course index
    // Consider creating a copy of the course to avoid modifying the original object
    this.courses[index] = { ...course }; // Optional: Create a copy for editing
  }

  saveCourse(course: Course) {
    if (this.editingCourseIndex !== null && this.editingCourseIndex >= 0) {
      this.courses[this.editingCourseIndex].score = course.score;  // Update score directly
      this.courses[this.editingCourseIndex].grade = this.calculateGrade(course.score); // Recalculate grade
      this.editingCourseIndex = null;
      this.cgpa = null; // Invalidate CGPA after course edit
    }
  }
}
