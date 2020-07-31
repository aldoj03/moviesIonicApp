import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-slider',
  templateUrl: './poster-slider.component.html',
  styleUrls: ['./poster-slider.component.scss'],
})
export class PosterSliderComponent implements OnInit {

  @Input() peliculas;

  public slideOpts;

  constructor() { 
   
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

  trackByFn(val){
    return val.id
  }

}

