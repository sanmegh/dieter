import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MealViewComponent } from './meal-view.page';


describe('MealViewComponent', () => {
  let component: MealViewComponent;
  let fixture: ComponentFixture<MealViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealViewComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
