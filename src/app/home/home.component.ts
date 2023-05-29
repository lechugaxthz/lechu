import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { MiDataDto } from '../dto/miData.dto';
import { miData } from '../miData.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('viewDevelopment', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(1300, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('viewData', [
      transition(':enter', [
        animate(2000, style({

        }))
      ])
    ])
  ]
})
export class HomeComponent {
  userData: MiDataDto;

  constructor() {
    this.userData = miData
  }
}
