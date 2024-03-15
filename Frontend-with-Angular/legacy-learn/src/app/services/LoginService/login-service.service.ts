import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { LoginResponse } from '../../modules/login.response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://localhost:8080/api';
  private token: string | null = null;

  constructor(private http: HttpClient,
    ) { }

  login(loginForm: FormGroup): Observable<LoginResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginForm.value, {headers})
    .pipe(
      map((response: { token: string; }) => {
        // Store the token in local storage (or a more secure mechanism)
        localStorage.setItem('token', response.token);
        return response;
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
