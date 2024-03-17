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

  createAdminUser(user: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<User>(`${this.baseUrl}/registerAdmin`, user, {headers});
  }
  
  createStudentUser(user: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<User>(`${this.baseUrl}/registerStudent`, user, {headers});
  }
  
}
