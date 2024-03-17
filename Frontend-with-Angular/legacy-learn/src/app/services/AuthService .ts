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
      console.log(token);
      
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken?.roles[0].authority; // {roles: [{authority: "STUDENT"}]}
    }
    return null;
  }
}

`
eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTcxMDY0NDUwN30.PzvkKmZ-rx6NFy_GLbkT1wRBV8RfBGrKrweobBBw62w_9sAmIK0qiWzHhrA9hZRxPkFj9MAXZX7ODHyW6ck-Ag


`;
