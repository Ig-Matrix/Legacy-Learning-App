import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavLink {
  label : string;
  path : string;
  showOn?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navLinksSubject = new BehaviorSubject<NavLink[]>([]);
  navLinks$ = this.navLinksSubject.asObservable();

  constructor() { }

  setLinks(links : NavLink[]): void {
    this.navLinksSubject.next(links);
  }
}
