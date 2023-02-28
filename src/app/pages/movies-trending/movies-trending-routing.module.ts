import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesTrendingPage } from './movies-trending.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesTrendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesTrendingPageRoutingModule {}
