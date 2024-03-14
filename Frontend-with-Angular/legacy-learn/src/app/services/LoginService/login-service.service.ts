import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient,
    ) { }

  login(loginForm: FormGroup): Observable<{token: string}> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/login`, loginForm.value, {headers});
  }
}
