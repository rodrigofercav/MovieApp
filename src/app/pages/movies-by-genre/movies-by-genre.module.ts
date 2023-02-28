import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesByGenrePageRoutingModule } from './movies-by-genre-routing.module';

import { MoviesByGenrePage } from './movies-by-genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesByGenrePageRoutingModule
  ],
  declarations: [MoviesByGenrePage]
})
export class MoviesByGenrePageModule {}
