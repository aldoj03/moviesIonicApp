import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackDropSliderComponent } from '../back-drop-slider/back-drop-slider.component';
import { PosterSliderComponent } from '../poster-slider/poster-slider.component';
import { PopularesSliderComponent } from '../populares-slider/populares-slider.component';
import { PeliculaDetailComponent } from '../pelicula-detail/pelicula-detail.component';



@NgModule({
  declarations: [
    BackDropSliderComponent,
    PosterSliderComponent,
    PeliculaDetailComponent,
    PopularesSliderComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackDropSliderComponent,
    PosterSliderComponent,
    PeliculaDetailComponent,
    PopularesSliderComponent
  ]
})
export class ComponentsModule { }
