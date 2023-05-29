import { Component } from '@angular/core';
import { MailDto } from './dto/mail.dto';
import { MiDataDto } from './dto/miData.dto';
import { miData } from './miData.component';

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
  userData: MiDataDto;

  /* info mail. */

  dataMail: MailDto

  mailBody: string

  constructor() {
    /* current Path */
    this.currentUrl = window.location.href
    this.currentUrl = this.currentUrl.split('/')
    this.currentUrl = this.currentUrl[this.currentUrl.length - 1]

    /* ref Styles */
    this.styleButtonHome = this.currentUrl === '' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';
    this.styleButtonAbout = this.currentUrl === '/about' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';

    /* ref user */

    this.userData = miData

    /* mail data */
    this.dataMail = {
      userName: '',
      userLastName: '',
      userMail: '',
      userContactNumber: '',
      mailMatters: '',
      mailContent: ''
    }

    this.mailBody = `user sender: ${this.dataMail.userName} ${this.dataMail.userLastName} (mail: ${this.dataMail.userMail}). description: ${this.dataMail.mailContent}`

  }


}
