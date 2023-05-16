import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* solo indica el url actual */
  currentUrl: any;

  /* indicatemos variables para poder modificar los botones y darle estilo acorde a la vista que estemos */
  styleButtonHome: string;
  styleButtonAbout: string;

  /* mi info */
  userData: any = {};

  constructor() {
    /* current Path */
    this.currentUrl = window.location.href
    this.currentUrl = this.currentUrl.split('/')
    this.currentUrl = this.currentUrl[this.currentUrl.length - 1]
    
    /* ref Styles */
    this.styleButtonHome = this.currentUrl === '' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';
    this.styleButtonAbout = this.currentUrl === '/about' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';

    /* ref user */
    this.userData.name = 'Lautaro Garcia'
    this.userData.designation = 'Full-Stack Developer'
  }


}
