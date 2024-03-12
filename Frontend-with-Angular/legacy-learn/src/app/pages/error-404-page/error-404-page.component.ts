import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../components/home-navigation/home-navigation.component";
import { Router, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-error-404-page',
    standalone: true,
    templateUrl: './error-404-page.component.html',
    styleUrl: './error-404-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent, RouterLinkActive, RouterLink]
})
export class Error404PageComponent {

}
