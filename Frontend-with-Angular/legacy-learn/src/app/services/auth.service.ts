import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) { }

  public login(jwtToken: string) {
    this.isLoggedInSubject.next(true);
    // To store JWT token securely
  }

  public logout() {
    this.isLoggedInSubject.next(false);
    // To remove JWT token from storage
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return this.isLoggedInSubject.getValue();
  }

  public checkLogin(): void {
    // To check for stored JWT token or other authentication mechanism
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.login(token);
    } else {
      this.isLoggedInSubject.next(false);
    }
  }
}
