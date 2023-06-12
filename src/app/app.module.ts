import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectCardsComponent } from './home/project-cards/project-cards.component';
import { ModalProjectComponent } from './home/modal-project/modal-project.component';
import { ModalMailComponent } from './modal-mail/modal-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectCardsComponent,
    ModalProjectComponent,
    ModalMailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
