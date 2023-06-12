import { Component, OnInit, Renderer2 } from '@angular/core';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-init-email-js',
  template: `<div #scriptElement></div>`
})
export class InitEmailJsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = (function () {
      emailjs.init('tW9dSd7fCU5zcn69H')      
    })();
    this.renderer.appendChild(document.body, script);
  }

}
