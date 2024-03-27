import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { CommonModule } from '@angular/common';
import { Announcement } from '../../../../models/announcement.model';
import { AnnouncementListComponent } from "../../../components/announcements/announcement-list/announcement-list.component";
import { AnnouncementService } from '../../../services/AnnouncementService/announcement.service';
import { AdminAnnouncementService } from '../../../services/AnnouncementService/admin-announcement-service';

@Component({
    selector: 'app-student-announcement-page',
    standalone: true,
    templateUrl: './student-announcement-page.component.html',
    styleUrl: './student-announcement-page.component.css',
    imports: [SideBarComponent, HomeNavigationComponent, CommonModule, AnnouncementListComponent]
})
export class StudentAnnouncementPageComponent implements OnInit {
    announcement!: Announcement[];
    isLoading: boolean = false;
    
    constructor(
        private annService: AnnouncementService,
    ) {}

    ngOnInit() {
        this.fetchAnnouncements();
    }

    fetchAnnouncements() {
        this.isLoading = true;
        this.annService.getAnnouncements().subscribe(
          (res) => {
            this.isLoading = false;
            this.announcement = res;
          },
          (error) => {
            this.isLoading = false;
            console.log(error);
          }
        );
      }
}