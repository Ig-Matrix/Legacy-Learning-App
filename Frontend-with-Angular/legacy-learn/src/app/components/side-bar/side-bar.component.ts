import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/LoginService/login-service.service';
import { MenuConstant } from '../../constant/menu';
import { AuthService } from '../../services/AuthService ';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  menus: any = [];
  filteredMenus: any [] = [];
  role: string | null = null;

  constructor (
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
    ) {
      
      this.menus = MenuConstant.menus;
      const userData = localStorage.getItem('auth_token');
      if (userData != null) {
        this.role = this.authService.getRole();
      }
      this.menus.forEach((element: any) => {
        const isRolePresent = element.roles.find((role: any) => role === this.role);
        if (isRolePresent != undefined) {
          this.filteredMenus.push(element);
        }
      });

      this.filteredMenus.forEach((menuItem: any) => {
        console.log(
          `<a routerLink="${menuItem.path}" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <i class="${menuItem.iconPath}"></i>
            ${menuItem.title}
          </a>`);
      });
    }
    

    logout() {
      this.loginService.logout();
      this.router.navigate(["/"]);
    }
    icons = [
      { name: '', iconPath: 'assets/fonts/right-from-bracket-solid.svg', title: 'Logout'}
    ];
  }

  // icons = [
  //   { name: 'home', iconPath: 'assets/fonts/house-solid.svg', title: 'Home'},
  //   { name: 'news', iconPath: 'assets/fonts/newspaper-solid.svg', title: 'News'},
  //   { name: 'feedback', iconPath: 'assets/fonts/comment-solid.svg', title: 'Feedback'},
  //   { name: 'portfolio', iconPath: 'assets/fonts/briefcase-solid.svg', title: 'Portfolio'},
  //   {name: 'about', iconPath: 'assets/fonts/location-dot-solid.svg', title: 'About Us'},
  //   { name: 'contact', iconPath: 'assets/fonts/address-card-solid.svg', title: 'Contact Us'},
  // ];
  
