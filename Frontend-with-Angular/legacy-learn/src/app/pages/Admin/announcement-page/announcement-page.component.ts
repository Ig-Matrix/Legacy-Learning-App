import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";

@Component({
    selector: 'app-announcement-page',
    standalone: true,
    templateUrl: './announcement-page.component.html',
    styleUrl: './announcement-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent]
})
export class AnnouncementPageComponent {

}
