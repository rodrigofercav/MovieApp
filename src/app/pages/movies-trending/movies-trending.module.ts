import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesTrendingPageRoutingModule } from './movies-trending-routing.module';

import { MoviesTrendingPage } from './movies-trending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesTrendingPageRoutingModule
  ],
  declarations: [MoviesTrendingPage]
})
export class MoviesTrendingPageModule {}
