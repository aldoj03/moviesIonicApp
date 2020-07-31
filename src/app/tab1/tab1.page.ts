import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public peliculas:Array<any>;
  public slideOpts;
  constructor(
    private peticionesService: PeticionesService
  ) {
    this.peliculas = [];
  }

  ngOnInit(){
    this.slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    this.peticionesService.getFeatured().subscribe(val=> {
      this.peliculas = val.results
      console.log(val.results);
      
    })
  }
}
