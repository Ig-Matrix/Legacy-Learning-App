import { Component } from '@angular/core';
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { StudentPortfolioComponent } from '../student-portfolio/student-portfolio.component';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.css',
    imports: [HomeNavigationComponent, SideBarComponent, StudentPortfolioComponent, RouterLink, RouterLinkActive]
})

export class PortfolioPageComponent {

    constructor(){ }

}
