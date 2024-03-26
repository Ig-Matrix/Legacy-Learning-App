import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface FeedbackData {
  modelChosen: string;
  responseChosen: {[key: string]: any};
}

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  baseUrl = 'http://localhost:8080/api';
  
  constructor(
    private http: HttpClient
  ) {}

 
  submitFeedback(feedbackData: FeedbackData): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/student/sendFeedback`, feedbackData, { headers });
  }
}
