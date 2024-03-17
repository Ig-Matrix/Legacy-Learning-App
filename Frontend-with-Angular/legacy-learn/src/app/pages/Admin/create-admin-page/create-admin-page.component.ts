import { Component } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from '../../../services/UserService/user.service';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";

@Component({
    selector: 'app-create-admin-page',
    standalone: true,
    templateUrl: './create-admin-page.component.html',
    styleUrl: './create-admin-page.component.css',
    imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive, SideBarComponent, HomeNavigationComponent]
})
export class CreateAdminPageComponent {
  icons = [
    { name: 'eye', src: 'assets/fonts/eye-solid.svg'},
    { name: 'eye-slash', src: 'assets/fonts/eye-slash-solid.svg'}]
  switchIcon1: boolean = true;
  switchIcon2: boolean = true;
  showPassword: boolean = true;
  showConfirmPassword = true;
  isLoading: boolean= false;

  signUpAdminForm: FormGroup = new FormGroup({
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email])
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
      firstName: this.signUpAdminForm.value.firstname,
      lastName: this.signUpAdminForm.value.lastname,
      username: this.signUpAdminForm.value.username,
      password: this.signUpAdminForm.value.password,
      email: this.signUpAdminForm.value.email,
    }

    this.userService.createAdminUser(user)
    .subscribe(
      (user) => {
        console.log("Registration successful!");
        this.router.navigate(['/home']);
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