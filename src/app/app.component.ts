import { Component } from '@angular/core';
import { MailDto } from './dto/mail.dto';
import { MiDataDto } from './dto/miData.dto';
import { miData } from './miData.component';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { DomSanitizer } from '@angular/platform-browser';

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
  toHtml: any

  /* info mail. */

  dataMail: any

  /* modal mail info */

  refuseEmail: { about: string, text: string, icon: string, color: string, statusModal: string, changeStatus: Function }

  errorEmail: { about: string, text: string, icon: string, color: string, statusModal: string, changeStatus: Function }

  emailSend: { about: string, text: string, icon: string, color: string, statusModal: string, changeStatus: Function }

  thisMessage: { about: string, text: string, icon: string, color: string, statusModal: string, changeStatus: Function }





  constructor(private sanitizer: DomSanitizer) {
    /* current Path */
    this.currentUrl = window.location.href
    this.currentUrl = this.currentUrl.split('/')
    this.currentUrl = this.currentUrl[this.currentUrl.length - 1]

    /* ref Styles */
    this.styleButtonHome = this.currentUrl === '' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';
    this.styleButtonAbout = this.currentUrl === '/about' ? 'text-gray-800 font-bold dark:text-gray-400' : 'text-sm font-semibold leading-6 text-gray-900';

    /* ref user */

    this.userData = miData

    for (let i = 0; i < this.userData.socialMedia.length; i++) {
      this.userData.socialMedia[i].icon = this.sanitizer.bypassSecurityTrustHtml(this.userData.socialMedia[i].icon)
    }

    /* mail data */

    this.dataMail = {
      userName: '',
      userLastName: '',
      userMail: '',
      userContactNumber: '',
      mailIssues: '',
      mailContent: ''
    }

    this.errorEmail = {
      about: 'Complete all',
      text: `If you want to send an email, you must complete all the fields`,
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
      color: 'text-red-600',
      statusModal: 'visible',
      changeStatus: function () { this.statusModal = 'invisible' }
    }

    this.refuseEmail = {
      about: 'Error',
      text: `Something went wrong, pleace, try again or send an email to lautarogonzalogarcia@outlook.com`,
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
      color: 'text-red-600',
      statusModal: 'visible',
      changeStatus: function () { this.statusModal = 'invisible' }
    }

    this.emailSend = {
      about: 'message successfully sent',
      text: "Thanks for your message, i'll reply soon.",
      icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
      color: 'text-green-600',
      statusModal: 'visible',
      changeStatus: function () { this.statusModal = 'invisible' }
    }

    this.thisMessage = {
      about: '',
      text: '',
      icon: '',
      color: '',
      statusModal: 'invisible',
      changeStatus: function () { this.about = '', this.text = '', this.icon = '', this.color = '', this.statusModal = 'invisible' }
    }

  }

  public onNameChange(newValue: any) {
    newValue.value !== null ? this.dataMail.userName = newValue.value : this.dataMail.userName = ''
  }

  public onLastNameChange(newValue: any) {
    newValue.value !== null ? this.dataMail.userLastName = newValue.value : this.dataMail.userLastName = ''
  }

  public onMailChange(newValue: any) {
    newValue.value !== null ? this.dataMail.userMail = newValue.value : this.dataMail.userMail = ''
  }

  public onContactNumberChange(newValue: any) {
    newValue.value !== null ? this.dataMail.userContactNumber = newValue.value : this.dataMail.userContactNumber = '';
  }

  public onIssuesChange(newValue: any) {
    newValue.value !== null ? this.dataMail.mailIssues = newValue.value : this.dataMail.mailIssues = ''
  }

  public onContentChange(newValue: any) {
    newValue.value !== null ? this.dataMail.mailContent = newValue.value : this.dataMail.mailContent = ''
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    if (
      this.dataMail.userName.length !== 0 &&
      this.dataMail.userLastName.length !== 0 &&
      this.dataMail.userMail.length !== 0 &&
      this.dataMail.mailIssues.length !== 0 &&
      this.dataMail.mailContent.length !== 0
    ) {
      emailjs.sendForm('service_9vek5zv', 'template_ekd58sb', e.target as HTMLFormElement, 'tW9dSd7fCU5zcn69H')
        .then(() => {
          this.thisMessage = { ...this.emailSend }
        }, (error) => {
          this.thisMessage = { ...this.refuseEmail }
        });
    } else {
      this.thisMessage = { ...this.errorEmail }
    }
  }

}

