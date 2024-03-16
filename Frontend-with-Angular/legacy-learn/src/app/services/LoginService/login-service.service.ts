import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, map, throwError } from 'rxjs';
import { JwtAuthResponse } from '../../modules/jwt.auth.response';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authToken?: string;
  private tokenType?: string;

  private baseUrl: string = 'http://localhost:8080/api';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router,
    private http: HttpClient) { }

  login(loginForm: FormGroup): Observable<JwtAuthResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<JwtAuthResponse>(`${this.baseUrl}/login`, loginForm.value, {headers})
    .pipe(
      tap(response => {
        this.authToken = response.accessToken;
        this.tokenType = response.tokenType;
        localStorage.setItem('auth_token', this.authToken);
        localStorage.setItem('token_type', this.tokenType);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('token_type');
  }

  isAuthenticated(): boolean {
    return this.authToken !== null;
  }

public checkLogin() {
  // To check for stored JWT token or other authentication mechanism
  const token = localStorage.getItem('auth_token');
  if (token) {
    return of({ accessToken: token, tokenType: localStorage.getItem('token_type') });
  } 
  return of(null);
  }

}
