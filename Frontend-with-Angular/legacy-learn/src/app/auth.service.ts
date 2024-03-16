import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import {Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginResponse } from './modules/jwt.auth.response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient,
    private router : Router) { }

  login(loginForm: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginForm).pipe(
      tap((response: { token: string; }) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }
  
}
