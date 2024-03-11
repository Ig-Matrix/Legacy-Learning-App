import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";

@Component({
    selector: 'app-student-announcement-page',
    standalone: true,
    templateUrl: './student-announcement-page.component.html',
    styleUrl: './student-announcement-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent]
})
export class StudentAnnouncementPageComponent {

}
