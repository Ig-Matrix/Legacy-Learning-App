import { Component } from '@angular/core';
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";

@Component({
    selector: 'app-admin-create-user',
    standalone: true,
    templateUrl: './admin-create-user.component.html',
    styleUrl: './admin-create-user.component.css',
    imports: [HomeNavigationComponent, SideBarComponent]
})
export class AdminCreateUserComponent {

}
