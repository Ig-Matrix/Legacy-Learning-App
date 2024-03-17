import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService(); // Create an instance

  constructor() {} 

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  public getRole(): string | null {
    const token = localStorage.getItem('auth_token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken.roles);
      return decodedToken?.roles[0].authority; // {roles: [{authority: "STUDENT"}]}
    }
    return null;
  }
}
