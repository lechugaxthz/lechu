import { Component, Input } from '@angular/core';
import { ToViewProjectDetailDto } from '../project-cards/dto/projextToView.dto';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent {
  @Input() project: ToViewProjectDetailDto
  @Input() projectClose: Function

  constructor() {
    this.project = { name: '', about: '', team: [{ img: '', url: '' }] }
    this.projectClose = () => { }
  }

}
