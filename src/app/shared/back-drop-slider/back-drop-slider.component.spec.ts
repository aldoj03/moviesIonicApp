import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackDropSliderComponent } from './back-drop-slider.component';

describe('BackDropSliderComponent', () => {
  let component: BackDropSliderComponent;
  let fixture: ComponentFixture<BackDropSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackDropSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackDropSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
