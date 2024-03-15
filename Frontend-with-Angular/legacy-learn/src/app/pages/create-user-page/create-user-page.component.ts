import { Component } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "../../components/footer/footer.component";
import { UserService } from '../../services/UserService/user.service';

@Component({
    selector: 'app-create-user-page',
    standalone: true,
    templateUrl: './create-user-page.component.html',
    styleUrl: './create-user-page.component.css',
    imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive, FooterComponent]
})
export class CreateUserPageComponent {
  icons = [
    { name: 'eye', src: 'assets/fonts/eye-solid.svg'},
    { name: 'eye-slash', src: 'assets/fonts/eye-slash-solid.svg'}]
  switchIcon1: boolean = true;
  switchIcon2: boolean = true;
  showPassword: boolean = true;
  showConfirmPassword = true;
  isLoading: boolean= false;

  signUpForm: FormGroup = new FormGroup({
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  }, {validators: this.passwordMatchValidator} as AbstractControlOptions);

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {mismatch: true};
  }

  togglePasswordVisibility(field: 'password'): void {
    this.switchIcon1 = !this.switchIcon1; 
    // Toggle the showPassword only for the specified field
    if (field === 'password') {
        this.showPassword = !this.showPassword;
    }
  }
  toggleConfirmPasswordVisibility(field: 'confirmPassword'): void {
    this.switchIcon2 = !this.switchIcon2;    
    // Toggle the showPassword only for the specified field
    if (field === 'confirmPassword') {
        this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  ngOnInit(): void { }

  errorMessage: string = '';
  
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  clearErrorMessage() {
    this.errorMessage = '';
  }

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = '';

    const user = {
      firstName: this.signUpForm.value.firstname,
      lastName: this.signUpForm.value.lastname,
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.password,
      email: this.signUpForm.value.email,
    }

    this.userService.createStudentUser(user)
    .subscribe(
      (user) => {
        console.log("Registration successful!", user);
        this.router.navigate(['/loginPage']);
      },
      error => {
        this.errorMessage = 'Registration error';
        console.log('Error: ', error);
        this.isLoading = false;
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

}
