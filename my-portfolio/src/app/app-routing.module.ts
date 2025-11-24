import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './Homepage/Homepage';
import { ArtworksComponent } from './Artworks/artworks';

const routes: Routes = [
  {path: 'Home', component: Homepage },
   { path: 'artworks', component: ArtworksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
