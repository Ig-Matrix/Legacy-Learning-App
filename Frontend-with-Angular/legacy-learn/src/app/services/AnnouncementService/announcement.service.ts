import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../../../models/announcement.model';


@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}/getAnnouncement`);
  }

}
