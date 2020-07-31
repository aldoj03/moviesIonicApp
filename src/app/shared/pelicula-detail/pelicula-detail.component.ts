import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.scss'],
})
export class PeliculaDetailComponent implements OnInit,OnDestroy {

  @Input() id
  public pelicula;
  public cast;
  constructor(
    private peticionesService: PeticionesService
  ) {
  }

  ngOnInit() {
    const sub = this.peticionesService.getMovie(this.id).subscribe(movie => {
      console.log(movie)
      this.pelicula = movie,
      sub.unsubscribe()
    });

    this.peticionesService.getMovieCast(this.id).subscribe(movie=>{
      console.log(movie)
    })

  }

  ngOnDestroy(){

  }

}
