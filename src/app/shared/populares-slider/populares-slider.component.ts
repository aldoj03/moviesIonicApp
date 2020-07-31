import { Component, OnInit, Input } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { ModalController } from '@ionic/angular';
import { PeliculaDetailComponent } from '../pelicula-detail/pelicula-detail.component';

@Component({
  selector: 'app-populares-slider',
  templateUrl: './populares-slider.component.html',
  styleUrls: ['./populares-slider.component.scss'],
})
export class PopularesSliderComponent implements OnInit {

  @Input() peliculas;

  public slideOpts;
  public page;
  public loader;

  constructor(
    private peticionesService: PeticionesService,
    private modalController: ModalController
  ) { 
    this.page = 2;
    this.loader = false;
  }

  ngOnInit() {
    this.slideOpts = {
      slidesPerView: 1.3,
      initialSlide: 1,
      speed: 400,
      breakpoints: {

        480: {
          slidesPerView: 2.3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3.3,
          spaceBetween: 40
        }
      }
    };
  }

  loadData(event){
    this.loader = true;
    const peticion = this.peticionesService.getPopulares(this.page).subscribe(data=>{
      console.log(data.results);
      console.log(this.peliculas);
      
      this.peliculas = [ ...this.peliculas, ...data.results];
      this.page++;
      this.loader = false;
    })

  }

  async openModal(pelicula) {
    const modal = await this.modalController.create({
      component: PeliculaDetailComponent,
      componentProps: pelicula,
      swipeToClose: true
    });
    return await modal.present();
  }

  trackByFn(val){
    return val.id
  }
}
