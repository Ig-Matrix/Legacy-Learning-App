import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../services/NavigationService/navigation.service';
import { NavLink } from '../../services/NavigationService/navigation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isNavActive = false;
  barsIcon = faList;
  // navLinks: NavLink[] = [
  //   {label: 'LandingPage', path: '/'},
  //   {label: 'Home', path: '/home', showOn: ['/']},
  //   {label: 'Log-in', path: '/login', showOn: ['/']},
  //   {label: 'Sign-up', path: '/create', showOn: ['/']},
  //   {label: 'Announcement', path: '/news', showOn: ['/home']},
  //   {label: 'Portfolio', path: '/portfolio', showOn: ['/home']},
  //   {label: 'Feedback', path: '/feedback', showOn: ['/home']},
  //   {label: 'About', path: '/about', showOn: ['/']},
  //   {label: 'Contact Us', path: '/contact', showOn: ['/']},
  // ];

  constructor(
    private elRef: ElementRef,
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
    // private navigationService: NavigationService
    ) {}

    // ngOnInit(): void {
    //     this.navigationService.navLinks$.subscribe(links => this.navLinks = links);
    // }
    // isActive(path:string):boolean {
    //   return this.router.url === path;
    // }

    toggleNavBar() {
      this.isNavActive = !this.isNavActive;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
      const targetElement = event.target as HTMLElement;

      if (!this.elRef.nativeElement.contains(targetElement)) {
        this.isNavActive = false;
      }
    }
}
