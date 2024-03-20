import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../../../models/announcement.model';


@Injectable({
  providedIn: 'root'
})

export class AdminAnnouncementService {
  private baseUrl: string = 'http://localhost:8080/api/admin';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createAnnouncements(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.baseUrl}/createAnnouncement/{announcementId}`, announcement)
  }

  editAnnouncements(announcementId: number, announcement: Announcement): Observable<Announcement> {
    return this.http.put<Announcement>(`${this.baseUrl}/editAnnouncement/{announcementId}`, announcement);
  }

  deleteAnnouncements(announcementId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteAnnouncement/{announcementId}`);
  }

}
