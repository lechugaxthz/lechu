import { Component } from '@angular/core';
import { MyProjectsDto } from './dto/Projexts.dto';
import { myProjects } from './Project.component';
import { trigger, style, transition, animate, state } from '@angular/animations';

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
  openModal: Function
  closeModal: Function

  constructor() {
    /* doy contenido al contenedor */
    this.allProject = myProjects

    /* doy el valor a cada una de las variables con su respectiva funcion*/
    this.openModal = function (project: MyProjectsDto) { project.viewAbout = 'visible' }
    this.closeModal = function (project: MyProjectsDto) { project.viewAbout = 'invisible' }

  }
}
