import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../components/home-navigation/home-navigation.component";

@Component({
    selector: 'app-contact-us-page',
    standalone: true,
    templateUrl: './contact-us-page.component.html',
    styleUrl: './contact-us-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent]
})
export class ContactUsPageComponent {

}
