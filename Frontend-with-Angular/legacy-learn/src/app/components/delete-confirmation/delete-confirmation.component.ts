import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.css',
})
export class DeleteConfirmationComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  confirmDelete(): void {
    this.confirm.emit();
  }

  cancelDelete(): void {
    this.cancel.emit();
  }
}
