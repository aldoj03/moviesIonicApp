import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaRequest } from '../interfaces/pelicula';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private moviesKey = environment.apiMovies;
  private apiUrl = 'https://api.themoviedb.org/3/';
  private language = '&language=es&include_image_language=es';
  constructor(
    private http: HttpClient
  ) {
  }


  private ejecutarQuery(endPoint,params) {
    const Url = `${this.apiUrl}${endPoint}api_key=${this.moviesKey}${this.language}${params}`;
    return this.http.get<PeliculaRequest>(Url)
  }

  private featuredPeriod() {

    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}`: `${date.getMonth()}`;
    const day = date.getDate() < 10 ? `0${date.getDate()}`: `${date.getDate()}`;

    const pastMonth = Number(month) - 1 < 10 ? `0${Number(month) - 1}`: `${Number(month) - 1}`;

    const today = `${year}-${month}-${day}`;
    const todayPastMonth = `${year}-${pastMonth}-${day}`;
    
    return { today, todayPastMonth }
    
  }
  getFeatured() {
    const Dates = this.featuredPeriod();
    
    return this.ejecutarQuery('discover/movie?',`&primary_release_date.gte=${Dates.todayPastMonth}&primary_release_date.lte=${Dates.today}`)
  }
  
  getPopulares(page) {
    
    return this.ejecutarQuery('discover/movie?',`&sort_by=popularity.desc&page=${page}`)
  }
  
  getMovie(id){
    return this.ejecutarQuery(`movie/${id}?`,'')

  }
  getMovieCast(id){
    return this.ejecutarQuery(`movie/${id}/credits?`,'')

  }
}
