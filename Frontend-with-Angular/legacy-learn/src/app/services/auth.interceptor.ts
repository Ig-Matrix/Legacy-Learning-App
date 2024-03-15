import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './LoginService/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}