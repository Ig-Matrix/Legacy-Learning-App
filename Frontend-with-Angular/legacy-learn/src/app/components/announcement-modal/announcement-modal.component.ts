import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminAnnouncementService } from '../../services/AnnouncementService/admin-announcement-service';

@Component({
  selector: 'app-announcement-modal',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './announcement-modal.component.html',
  styleUrl: './announcement-modal.component.css',
})
export class AnnouncementModalComponent {
  @Input() showModal!: boolean;
  @Output() closeModalEvent = new EventEmitter();
  isLoading: boolean = false;

  announcementForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    announcementContent: new FormControl('', [Validators.required]),
    createdAt: new FormControl('', [Validators.required]),
  });

  constructor(private announcementService: AdminAnnouncementService) {}

  onCloseModal(event: Event) {
    this.closeModalEvent.emit(event);
    this.stopPropagation(event);
    this.showModal = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydownHandler(event: KeyboardEvent) {
    if (this.showModal) {
      this.onCloseModal(event);
    }
  }

  submitCourse(event: Event) {
    this.isLoading = true;
    if (this.announcementForm.valid) {
      this.announcementService
        .createAnnouncements(this.announcementForm.value)
        .subscribe(
          (response) => {
            this.onCloseModal(event)
            console.log('submmitted', response);
            this.isLoading = false;
          },
          (error) => {
            console.log('error', error);
            this.isLoading = false;
            this.onCloseModal(event)
          }
        );
    }
  }
}
