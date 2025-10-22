import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upsert-modal',
  templateUrl: './upsert-modal-component.html',
  styleUrls: ['./upsert-modal-component.css']
})
export class UpsertModalComponent {
  @Input() isOpen = false;             // controla se o modal está aberto
  @Input() title?: string;             // título opcional
  @Output() onClose = new EventEmitter<void>();  // evento de fechamento

  close() {
    this.onClose.emit();
  }
}
