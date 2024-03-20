import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Announcement>(`${this.baseUrl}/createAnnouncement`, announcement, {headers})
  }

  editAnnouncements(announcementId: number, announcement: Announcement): Observable<Announcement> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<Announcement>(`${this.baseUrl}/editAnnouncement/{announcementId}`, announcement, {headers});
  }

  deleteAnnouncements(announcementId: number): Observable<void> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete<void>(`${this.baseUrl}/deleteAnnouncement/{announcementId}`, {headers});
  }

}
