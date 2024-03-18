import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement } from '../../model/announcement.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css'
})
export class AnnouncementListComponent {
  announcement: Announcement | null = null;
  @Input() announcements: Announcement[] = [];
  @Output() selectedAnnouncement = new EventEmitter<Announcement>();
  @Output() deleteAnnouncementRequested = new EventEmitter<number>();

  onAnnouncementSelected(announcement: Announcement | null ) {
    if (announcement) {
      this.selectedAnnouncement.emit(announcement);
    }
  }
  onDeleteRequested(announcementId: number) {
    this.deleteAnnouncementRequested.emit(announcementId);
  }
}
