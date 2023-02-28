import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'movies',
        loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesPageModule)
    },
    {
        path: 'movie/:id',
        loadChildren: () => import('./pages/movie-details/movie-details.module').then(m => m.MovieDetailsPageModule)
    },
  {
    path: 'movies/genre/:id/:name',
    loadChildren: () => import('./pages/movies-by-genre/movies-by-genre.module').then( m => m.MoviesByGenrePageModule)
  },
  {
    path: 'movies/trending/:timeWindow',
    loadChildren: () => import('./pages/movies-trending/movies-trending.module').then( m => m.MoviesTrendingPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
