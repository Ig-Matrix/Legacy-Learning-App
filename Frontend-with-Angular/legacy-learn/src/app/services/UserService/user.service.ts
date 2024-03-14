import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
  ) { }

  createAdminUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/admin/users`, user);
  }
  
  createStudentUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/student/users`, user);
  }
  
  approveEmail(email: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/approve`, email);
  }

  login(loginForm: FormGroup): Observable<{token: string}> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/login`, loginForm.value, {headers});
  }
  
}
