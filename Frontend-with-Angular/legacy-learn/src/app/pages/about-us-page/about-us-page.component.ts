import { Component } from '@angular/core';
import { HomeNavigationComponent } from "../../components/home-navigation/home-navigation.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
    selector: 'app-about-us-page',
    standalone: true,
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.css',
    imports: [HomeNavigationComponent, SideBarComponent]
})
export class AboutUsPageComponent {

}
