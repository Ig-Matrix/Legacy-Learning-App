import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

  constructor(
    private elRef: ElementRef,
    private router: Router,
    // private activatedRoute: ActivatedRoute,
    // private navigationService: NavigationService
    ) {}

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
