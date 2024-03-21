import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  baseUrl = 'http://localhost:8080/api';
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

 
  submitFeedback() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/sendFeedback`, {headers})
    .subscribe(response => {
      console.log("Feedback submitted successfully!");
    },
    error => {
      console.log("Error submitting feedback: " + error);
    });
  }
}


// getResponseForSelectedModel(this: any): {
//   model: string;
//   feedback: {
//     questionId: number,
//     question: string,
//     answer: string
//   }[] } {
//     let feedbackResponse: {model: string; feedback:  { questionId: number; question: string; answer: string; }[]; };
//     switch (this.selectedFeedbackType) {
//     case 'Instructor':
//       feedbackResponse = this.getFeedbackResponseService.getInstructorFeedbackResponse(this.feedbackForm);
//       break;
//     case 'Assessment':
//       feedbackResponse = this.getFeedbackResponseService.getAssessmentFeedbackResponse(this.feedbackForm);
//       break;
//     case 'Course':
//       feedbackResponse = this.getFeedbackResponseService.getCourseFeedbackResponse(this.feedbackForm);
//       break;
//     default:
//       feedbackResponse = {model: '', feedback:[] };
//   }
//   return feedbackResponse;
// }

// onModelSelected(model: string) {
  //   this.model = model;
  //   // const feedbackResponse = this.getResponseForSelectedModel();
  //   this.cdRef.detectChanges();
  // }
