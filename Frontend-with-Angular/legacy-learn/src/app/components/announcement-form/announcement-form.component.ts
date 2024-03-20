import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement } from '../../../models/announcement.model';

@Component({
  selector: 'app-announcement-form',
  standalone: true,
  imports: [],
  templateUrl: './announcement-form.component.html',
  styleUrl: './announcement-form.component.css'
})
export class AnnouncementFormComponent {
  @Input() announcements: Announcement | null = null;
  @Output() announcementSubmitted = new EventEmitter<Announcement>();

}
