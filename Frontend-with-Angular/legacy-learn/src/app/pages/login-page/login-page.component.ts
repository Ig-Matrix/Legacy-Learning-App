import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Validators , FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/LoginService/login-service.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [RouterLink, RouterLinkActive, CommonModule, FontAwesomeModule, ReactiveFormsModule, FooterComponent]
})
export class LoginPageComponent {
  icons = [
    { name: 'eye', src: 'assets/fonts/eye-solid.svg'},
    { name: 'eye-slash', src: 'assets/fonts/eye-slash-solid.svg'}]  
  switchIcon: boolean = true;
  showPassword: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
    ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  togglePasswordVisibility(): void {
    this.switchIcon = !this.switchIcon
    this.showPassword = !this.showPassword
}

  clearErrorMessage() {
  this.errorMessage = '';
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.loginService.login(this.loginForm)
    .subscribe(
      response => {
        this.isLoading = false;
        console.log('Login successful!');
        this.errorMessage = '';
        this.router.navigate(['/home']);
        const accessToken = response.accessToken;
        const tokenType = response.tokenType;
      },
      error => {
        this.errorMessage = 'Invalid username or password';
        this.isLoading = false;
        console.log('Login error: ', error);
        setTimeout(() => {
          this.clearErrorMessage();
        }, 3000);
      },
      () => {
        this.isLoading = false;
        setTimeout(() => {
          this.clearErrorMessage();
        }, 3000);
      });
  }

  // onSubmit(): void {
  //   this.router.navigate(['/home']);
  // }
  
  // onSubmit(): void {
  //   this.isLoading = true;
  //   if (this.loginForm.valid) {
  //     const loginData = this.loginForm.value;
  //     this.loginService.login(loginData).subscribe(
  //       (response) => {
  //         this.isLoading = false;
  //         this.userDetails.setUsername(response.username);
  //         this.userDetails.setEmail(response.email);
  //         this.router.navigate(['/homepage']);
  //         this.errorMessage = '';
  //       },
  //       (error) => {
  //         this.errorMessage = error.error.message;
  //         console.log(error);
  //         this.isLoading = false;

  //         setTimeout(() => {
  //           this.clearErrorMessage();
  //         }, 3000);
  //       },
  //     );
  //   } else {
  //     this.isLoading = false;
  //     console.log('Invalid form');
  //     this.errorMessage='Invalid form';

  //     setTimeout(() => {
  //       this.clearErrorMessage();
  //     }, 3000);
  //   }

}
