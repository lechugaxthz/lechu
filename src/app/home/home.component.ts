import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { MiDataDto } from '../dto/miData.dto';
import { miData } from '../miData.component';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {
    this.userData = miData
    for (let i = 0; i < this.userData.developmentTools.length; i++) {
      this.userData.developmentTools[i] = this.sanitizer.bypassSecurityTrustHtml(this.userData.developmentTools[i])
    }


  }

}
