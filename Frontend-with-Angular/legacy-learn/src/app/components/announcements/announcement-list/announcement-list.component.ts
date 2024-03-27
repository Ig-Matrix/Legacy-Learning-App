import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../../models/announcement.model';
import { AnnouncementService } from '../../../services/AnnouncementService/announcement.service';
import { DeleteConfirmationComponent } from '../../delete-confirmation/delete-confirmation.component';
import { AdminAnnouncementService } from '../../../services/AnnouncementService/admin-announcement-service';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [DeleteConfirmationComponent],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css',
})
export class AnnouncementListComponent implements OnInit {
  announcement!: Announcement[];
  isLoading: boolean = false;
  isConfirmDelete: boolean = false;
  annIdToDelete!: number;

  constructor(
    private annService: AnnouncementService,
    private adminAnn: AdminAnnouncementService
  ) {}

  toggleContent(announcement: Announcement) {
    announcement.showFullContent = !announcement.showFullContent;
  }

  getTruncatedContent(content: string) {
    return content.substring(0, 50);
  }

  editAnnouncement(announcement: Announcement, index: number) {}

  deleteAnnouncement(announcementId: number) {
    this.annIdToDelete = announcementId;
    this.isConfirmDelete = true;
  }

  onDeleteConfirmed(): void {
    if (this.annIdToDelete) {
      this.adminAnn.deleteAnnouncements(this.annIdToDelete).subscribe(
        (res) => {
          // this.announcement = this.announcement.filter(
          //   (ann) => ann !== this.announcement[this.annIdToDelete]
          // );
          this.fetchAnnouncements();
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
    this.isConfirmDelete = false;
  }

  onCancelConfirmed(): void {
    this.isConfirmDelete = false;
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
  
  ngOnInit(): void {
    this.fetchAnnouncements();
  }
}