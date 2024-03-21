import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminAnnouncementService } from '../../../services/AnnouncementService/admin-announcement-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
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

  editAnnouncement(event: Event) {
    this.isLoading = true;
    console.log('form data', this.announcementForm.value);

    if (this.announcementForm.valid) {
      // this.announcementService.editAnnouncements()
        // .createAnnouncements(this.announcementForm.value)
        // .subscribe(
        //   (response) => {
        //     this.onCloseModal(event);
        //     console.log('submmitted', response);
        //     this.isLoading = false;
        //   },
        //   (error) => {
        //     console.log('error', error);
        //     this.isLoading = false;
        //     this.onCloseModal(event);
        //   }
        // );
    }
  }
}
