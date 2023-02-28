import { Component, OnInit } from '@angular/core';
import { Genre, Genres, MovieService } from '../services/movie.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    genres: Genre[] = [];

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getGenres();
    }

    getGenres() {
        this.movieService.getGenres().subscribe((res) => {
            this.genres = [...res.genres];
            console.log(this.genres);
        });
    }
}
