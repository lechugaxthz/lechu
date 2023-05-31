import { Component } from '@angular/core';
import { MailDto } from './dto/mail.dto';
import { MiDataDto } from './dto/miData.dto';
import { miData } from './miData.component';

import emailjs from '@emailjs/browser'

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

  dataMail: any

  sendMail: Function

  /* modal mail info */

  refuseEmail: { text: string, icon: string, color: string }

  emailSend: { text: string, icon: string, color: string }

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
      mailIssues: '',
      mailContent: ''
    }

    this.refuseEmail = {
      text: 'You have to complete all the fields before sending',
      icon: '',
      color: ''
    }

    this.emailSend = {
      text: "Thanks for your message, i'll reply soon",
      icon: '',
      color: ''
    }

    this.sendMail = () => {
      if (
        this.dataMail.userName.length !== 0 &&
        this.dataMail.userLastName.length !== 0 &&
        this.dataMail.userMail.length !== 0 &&
        this.dataMail.mailIssues.length !== 0 &&
        this.dataMail.mailContent.length !== 0
      ) {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.dataMail, 'YOUR_PUBLIC_KEY')
          .then(() => {
            console.log();
          }, (error) => {
            console.log(error.text);
          });
      } else {
        alert('debe completar todos los campos antes de enviar el correo')
      }
    }

  }


}
