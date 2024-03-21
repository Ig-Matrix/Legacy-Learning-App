import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeedbackResponse } from '../../../models/FeedbackResponse/feedback-response.model';

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  baseUrl = 'http://localhost:8080/api';
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

 
  submitFeedback(feedbackResponse: FeedbackResponse) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/sendFeedback`, feedbackResponse, {headers})
    .subscribe(() => {
      console.log("Feedback submitted successfully!");
    },
    error => {
      console.log("Error submitting feedback: " + error);
    });
  }
}
