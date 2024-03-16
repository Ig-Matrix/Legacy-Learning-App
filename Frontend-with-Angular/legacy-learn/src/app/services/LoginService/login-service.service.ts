import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, map, throwError } from 'rxjs';
import { JwtAuthResponse } from '../../modules/jwt.auth.response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://localhost:8080/api';
  private token: string | null = null;

  constructor(private http: HttpClient,
    ) { }

  login(loginForm: FormGroup): Observable<JwtAuthResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<JwtAuthResponse>(`${this.baseUrl}/login`, loginForm.value, {headers})
    .pipe(
      map(response => response),
      catchError(error => {
        // Handle login errors here
        console.error('Login error:', error);
        return throwError(error); 
      })
    );
  }

  getToken(): string | null {
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
