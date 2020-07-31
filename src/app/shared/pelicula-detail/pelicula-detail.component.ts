import { Component, OnInit, Input } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.scss'],
})
export class PeliculaDetailComponent implements OnInit {

  @Input() id
  public pelicula;
  constructor(
    private peticionesService: PeticionesService
  ) {
  }

  ngOnInit() {
    this.peticionesService.getMovie(this.id).subscribe(movie => {
      console.log(movie)
    });

    this.peticionesService.getMovieCast(this.id).subscribe(movie=>{
      console.log(movie)
    })

  }

}
