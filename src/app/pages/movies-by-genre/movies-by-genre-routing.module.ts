import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesByGenrePage } from './movies-by-genre.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesByGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesByGenrePageRoutingModule {}
