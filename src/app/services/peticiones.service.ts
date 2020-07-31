import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaRequest } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    private http: HttpClient
  ) {
   }

  getFeatured(){
    return this.http.get<PeliculaRequest>('https://api.themoviedb.org/3/discover/movie?api_key=38e0099f3e1b0bd6830da5c65d652b6a&language=es&include_image_language=es&primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31')
  }
}
