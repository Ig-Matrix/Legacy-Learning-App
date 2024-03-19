import { Component, Input } from '@angular/core';
import { Announcement } from '../../model/announcement.model';

@Component({
  selector: 'app-announcement-details',
  standalone: true,
  imports: [],
  templateUrl: './announcement-details.component.html',
  styleUrl: './announcement-details.component.css'
})
export class AnnouncementDetailsComponent {
  @Input() announcement: Announcement | null = null;
}
