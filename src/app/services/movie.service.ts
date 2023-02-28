import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { stringify } from 'querystring';

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ApiResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[]
}


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getTopRatedMovies(page: number = 1): Observable<ApiResult> {
        return this.http.get<ApiResult>(`${environment.apiUrl}/movie/top_rated?api_key=${environment.apiKey}&page=${page}`);
    }

    getMovieDetails(id: number): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`);
    }

    getGenres(language: string = "en-US"): Observable<Genres> {
        return this.http.get<Genres>(`${environment.apiUrl}/genre/movie/list?api_key=${environment.apiKey}&language=${language}`);
    }

    getMoviesByGenre(id: number, page: number = 1): Observable<ApiResult> {
      return this.http.get<ApiResult>(`${environment.apiUrl}/discover/movie?api_key=${environment.apiKey}&page=${page}&with_genres=${id}`);
    }

    getTrendingMovies(timeWindow: string, page: number = 1): Observable<ApiResult> {
      return this.http.get<ApiResult>(`${environment.apiUrl}/trending/movie/${timeWindow}?api_key=${environment.apiKey}&page=${page}`);
    }
}
