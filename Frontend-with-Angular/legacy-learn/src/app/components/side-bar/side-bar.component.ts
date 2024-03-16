import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/LoginService/login-service.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor (
    private loginService: LoginService,
    private router: Router) {}

    logout() {
      this.loginService.logout();
      this.router.navigate(["/"]);
    }

  icons = [
    { name: 'home', iconPath: 'assets/fonts/house-solid.svg', title: 'Home'},
    { name: 'news', iconPath: 'assets/fonts/newspaper-solid.svg', title: 'News'},
    { name: 'feedback', iconPath: 'assets/fonts/comment-solid.svg', title: 'Feedback'},
    { name: 'portfolio', iconPath: 'assets/fonts/briefcase-solid.svg', title: 'Portfolio'},
    {name: 'about', iconPath: 'assets/fonts/location-dot-solid.svg', title: 'About Us'},
    { name: 'contact', iconPath: 'assets/fonts/address-card-solid.svg', title: 'Contact Us'},
  ];
  
  icons1 = [
    { name: '', iconPath: 'assets/fonts/right-from-bracket-solid.svg', title: 'Logout'}
  ];
}
