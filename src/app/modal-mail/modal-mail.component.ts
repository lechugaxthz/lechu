import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
  styleUrls: ['./modal-mail.component.css']
})
export class ModalMailComponent {
  @Input() modalData: { about: string, text: string, icon: string, color: string, statusModal: string, changeStatus: Function }

  constructor() {
    this.modalData = { about: '', text: '', icon: '', color: '', statusModal: '', changeStatus: () => { } }
  }
}
