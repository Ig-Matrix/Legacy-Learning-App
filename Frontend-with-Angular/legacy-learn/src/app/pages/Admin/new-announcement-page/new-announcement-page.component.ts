import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { AnnouncementListComponent } from "../../../components/announcement-list/announcement-list.component";
import { AnnouncementDetailsComponent } from "../../../components/announcement-details/announcement-details.component";
import { AnnouncementFormComponent } from "../../../components/announcement-form/announcement-form.component";
import { Announcement } from '../../../../models/announcement.model';
import { AnnouncementService } from '../../../services/AnnouncementService/announcement.service';
import { CommonModule } from '@angular/common';
import { AdminAnnouncementService } from '../../../services/AnnouncementService/admin-announcement-service';
import { AnnouncementModalComponent } from '../../../components/announcement-modal/announcement-modal.component';

@Component({
  selector: 'app-new-announcement-page',
  standalone: true,
  templateUrl: './new-announcement-page.component.html',
  styleUrl: './new-announcement-page.component.css',
  imports: [RouterLink, RouterLinkActive, HomeNavigationComponent, AnnouncementModalComponent, AnnouncementListComponent],
})
export class NewAnnouncementPageComponent {
  isShowModal: boolean = false;
  @Input() announcements: Announcement[] = [];
  @Output() selectedAnnouncement = new EventEmitter<Announcement>();

  openModal() {
    this.isShowModal = true;
  }

  closeModal() {
    this.isShowModal = false;
  }
}
