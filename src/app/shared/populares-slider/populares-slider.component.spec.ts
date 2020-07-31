import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularesSliderComponent } from './populares-slider.component';

describe('PopularesSliderComponent', () => {
  let component: PopularesSliderComponent;
  let fixture: ComponentFixture<PopularesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularesSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
