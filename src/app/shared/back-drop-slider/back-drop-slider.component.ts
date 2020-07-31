import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-back-drop-slider',
  templateUrl: './back-drop-slider.component.html',
  styleUrls: ['./back-drop-slider.component.scss'],
})
export class BackDropSliderComponent implements OnInit {


  @Input() peliculas;

  public slideOpts
  constructor() {
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

  ngOnInit() { }
  
  trackByFn(item){
    return item.id
  }

}
