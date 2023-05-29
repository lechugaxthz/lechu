import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent {
  @Input() projectName: string
  @Input() projectAbout: string
  @Input() projectTeam: { img: string, url: string }[]
  @Input() projectClose: Function

  constructor() {
    this.projectName = ''
    this.projectAbout = ''
    this.projectTeam = [{ img: '', url: '' }]
    this.projectClose = () => { }
  }

}
