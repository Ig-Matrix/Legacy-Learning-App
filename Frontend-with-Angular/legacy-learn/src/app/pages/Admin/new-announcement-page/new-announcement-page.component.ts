import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { AnnouncementListComponent } from "../../../components/announcement-list/announcement-list.component";
import { AnnouncementDetailsComponent } from "../../../components/announcement-details/announcement-details.component";
import { AnnouncementFormComponent } from "../../../components/announcement-form/announcement-form.component";
import { Announcement } from '../../../model/announcement.model';
import { AnnouncementService } from '../../../services/AnnouncementService/announcement.service';
import { CommonModule } from '@angular/common';
import { AdminAnnouncementService } from '../../../services/AnnouncementService/admin-announcement-service';


@Component({
    selector: 'app-new-announcement-page',
    standalone: true,
    templateUrl: './new-announcement-page.component.html',
    styleUrl: './new-announcement-page.component.css',
    imports: [RouterLink, RouterLinkActive, CommonModule, HomeNavigationComponent, AnnouncementListComponent,AnnouncementDetailsComponent, AnnouncementFormComponent]
})
export class NewAnnouncementPageComponent {
    @Input() announcements: Announcement[] = [];
    @Output() selectedAnnouncement = new EventEmitter<Announcement>();
    error: String = '';
    announcement: Announcement | null = null;

    constructor(
        private announcementService: AnnouncementService,
        private adminAnnouncementService: AdminAnnouncementService
    ) {
        this.fetchAnnouncements();
    }

    fetchAnnouncements() {
        this.announcementService.getAnnouncements()
        .subscribe(announcements => this.announcements = announcements);
    }

    onAnnouncementSelected(announcement: Announcement) {
        if (announcement) {
            this.selectedAnnouncement.emit(announcement);
        }
    }

    onDeleteannouncementRequested(announcementId: number) {
        if (confirm('Are you sure you want to delete this announcement?')) {
            this.adminAnnouncementService.deleteAnnouncements(announcementId)
            .subscribe(() => {
                this.announcements = this.announcements.filter(
                    a => a.id !== announcementId);
            }, (error: any) => {
                console.log("An error occured!", error);
            });
        }
    }

    handleAnnouncementSubmit(announcementData: Announcement) { 
        // Implement logic to handle form submission and create/submit announcement data
        console.log('Announcement submitted:', announcementData); 
        // this.announcementService.createAnnouncement(announcementData)
        //   .subscribe(
        //     (response) => console.log('Announcement created successfully:', response),
        //     (error) => console.error('Error creating announcement:', error)
        //   );
      }
}
