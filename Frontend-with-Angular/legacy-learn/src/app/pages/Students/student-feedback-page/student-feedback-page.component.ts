import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";

@Component({
    selector: 'app-student-feedback-page',
    standalone: true,
    templateUrl: './student-feedback-page.component.html',
    styleUrl: './student-feedback-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent]
})
export class StudentFeedbackPageComponent {

}
