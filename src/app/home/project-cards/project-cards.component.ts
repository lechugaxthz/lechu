import { Component } from '@angular/core';
import { MyProjectsDto } from './dto/Projexts.dto';
import { myProjects } from './Project.component';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent {
  /* defino contenedor de proyectos */
  allProject: MyProjectsDto[]

  constructor() {
    /* doy contenido al contenedor */
    this.allProject = myProjects

  }

}
