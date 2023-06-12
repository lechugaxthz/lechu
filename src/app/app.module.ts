import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectCardsComponent } from './home/project-cards/project-cards.component';
import { ModalProjectComponent } from './home/modal-project/modal-project.component';
import { ModalMailComponent } from './modal-mail/modal-mail.component';
import { InitEmailJsComponent } from './init-email-js/init-email-js.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectCardsComponent,
    ModalProjectComponent,
    ModalMailComponent,
    InitEmailJsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
