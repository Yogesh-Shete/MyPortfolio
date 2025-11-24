import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage } from './Homepage/Homepage';
import { ExperienceComponent } from './Experience/Experience';
import { ProjectsComponent } from './Projects/Projects';
import { EducationComponent } from './Education/Education';
import { ContactMeComponent } from './ContactMe/ContactMe';
import { NavbarComponent } from './Navbar/Navbar';
import { ArtworksComponent } from './Artworks/artworks';

@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactMeComponent,
    NavbarComponent,
    ArtworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
