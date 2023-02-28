import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Movie, MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movies-by-genre',
    templateUrl: './movies-by-genre.page.html',
    styleUrls: ['./movies-by-genre.page.scss'],
})
export class MoviesByGenrePage implements OnInit {
    genreName!: string;
    movies: Movie[] = [];
    currentPage = 1;
    apiImages = environment.apiImages;

    constructor(private route: ActivatedRoute, private movieService: MovieService, private loadingCtrl: LoadingController) { }

    ngOnInit() {
        this.loadMovies();
    }

    async loadMovies(event?: InfiniteScrollCustomEvent) {
        const id = this.route.snapshot.paramMap.get('id');

        if (id) {
            this.genreName = (this.route.snapshot.paramMap.get('name') + "");

            const loading = await this.loadingCtrl.create({
                message: 'Loading more data...',
                spinner: 'circular'
            })
            await loading.present();

            this.movieService.getMoviesByGenre(+id, this.currentPage).subscribe((res) => {
                loading.dismiss();
                this.movies.push(...res.results);
                console.log(res);

                event?.target.complete();
                if (event) event.target.disabled = (this.currentPage === res.total_pages);
            });
        }
    }

    loadMore(event: InfiniteScrollCustomEvent) {
        this.currentPage++;
        this.loadMovies(event);
    }

}
