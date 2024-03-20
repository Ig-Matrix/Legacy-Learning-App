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

