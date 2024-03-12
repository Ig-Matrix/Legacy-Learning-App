import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-student-feedback-page',
    standalone: true,
    templateUrl: './student-feedback-page.component.html',
    styleUrl: './student-feedback-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent, RouterLink, RouterLinkActive]
})
export class StudentFeedbackPageComponent {

}
