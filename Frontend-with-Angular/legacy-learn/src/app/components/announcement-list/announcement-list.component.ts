import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../models/announcement.model';
import { AnnouncementService } from '../../services/AnnouncementService/announcement.service';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css',
})
export class AnnouncementListComponent implements OnInit {
  announcement!: Announcement[];
  isLoading: boolean = false;

  constructor(private annService: AnnouncementService) {}

  editAnnouncement(announcement: Announcement, index: number) {}
  deleteAnnouncement(announcement: Announcement) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.annService.getAnnouncements().subscribe(
      (res) => {
        this.isLoading = false;
        this.announcement = res;
        console.log(res);
        
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }
}
