import { Component } from '@angular/core';
import { MyProjectsDto } from './dto/Projexts.dto';
import { myProjects } from './Project.component';
import { ToViewProjectDetailDto } from './dto/projextToView.dto';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css'],
  animations: [
  ]
})
export class ProjectCardsComponent {
  /* defino contenedor de proyectos */
  allProject: MyProjectsDto[]

  /* defino variables para colocar el elemento para redefinir la clase del modal.
  el calor o la variable a modificar se encuentra en cada uno de los objetos project */

  visibilityModal: any

  toViewProjectDetail: ToViewProjectDetailDto

  openModal: Function
  closeModal: Function

  constructor() {
    /* doy contenido al contenedor */
    this.allProject = myProjects

    /* doy valor inicial a project detail */
    this.toViewProjectDetail = { name: '', about: '', team: [{ img: '', url: '' }] }

    /* estado inicial de la visibilidad del modal */
    this.visibilityModal = 'invisible'

    /* doy el valor a cada una de las variables con su respectiva funcion*/
    this.openModal = function (project: MyProjectsDto) {
      this.toViewProjectDetail = { name: project.name, about: project.about, team: project.team }
      this.visibilityModal = 'visible'
    }
    this.closeModal = function () {
      this.visibilityModal = 'invisible'
      this.toViewProjectDetail = { name: '', about: '', team: [{ img: '', url: '' }] }
    }

  }
}
