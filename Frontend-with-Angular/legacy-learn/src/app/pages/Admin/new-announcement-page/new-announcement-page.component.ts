import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeNavigationComponent } from '../../../components/home-navigation/home-navigation.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AnnouncementListComponent } from '../../../components/announcements/announcement-list/announcement-list.component';
import { Announcement } from '../../../../models/announcement.model';
import { AnnouncementModalComponent } from '../../../components/announcements/announcement-modal/announcement-modal.component';

@Component({
  selector: 'app-new-announcement-page',
  standalone: true,
  templateUrl: './new-announcement-page.component.html',
  styleUrl: './new-announcement-page.component.css',
  imports: [
    RouterLink,
    RouterLinkActive,
    HomeNavigationComponent,
    AnnouncementModalComponent,
    AnnouncementListComponent,
  ],
})
export class NewAnnouncementPageComponent {
  isShowModal: boolean = false;
  @Input() announcements: Announcement[] = [];
  @Output() selectedAnnouncement = new EventEmitter<Announcement>();
  onAnnouncement: boolean = false;

  openModal() {
    this.isShowModal = true;
    this.onAnnouncement = false;
  }

  closeModal() {
    this.isShowModal = false;
    this.onAnnouncement = true;
  }
}
