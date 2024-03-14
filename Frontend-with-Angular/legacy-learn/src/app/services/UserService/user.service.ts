import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
  ) { }

  createAdminUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/admins/register`, user);
  }
  
  createStudentUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/students/register`, user);
  }
  
}
