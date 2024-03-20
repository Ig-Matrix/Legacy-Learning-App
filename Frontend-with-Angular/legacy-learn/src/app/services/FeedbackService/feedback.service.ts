import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackResponse } from '../../../models/FeedbackResponse/feedback.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  baseUrl = 'http://localhost:8080/api';
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  //  constructFeedbackData(this: any): FeedbackResponse {
  //   const feedbackFunction = this['get' + this.model + 'FeedbackResponse'] as (form: FormGroup) => { questionId: number; question: string; answer: string; selectedOption?: { label: string; value: string } }[];
  //   const feedback = feedbackFunction(this.feedbackForm);
  
  //   // Ensure type compatibility for 'reduce':
  //   const feedBackResponseToQuestions: { [questionId: number]: { question: string; answer: string } } = feedback.reduce(
  //       (acc: { [questionId: number]: { question: string; answer: string } } = {}, item) => {
  //   acc[item.questionId] = { question: item.question, answer: item.answer };
  //   return acc;
  //   }, {});
  
  //   return { model: this.model, questions: [feedBackResponseToQuestions] }; 
    
  // }

  // feedbackData = ;

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

