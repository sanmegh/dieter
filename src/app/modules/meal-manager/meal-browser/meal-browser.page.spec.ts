import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MealBrowserComponent } from './meal-browser.page';


describe('MealBrowserComponent', () => {
  let component: MealBrowserComponent;
  let fixture: ComponentFixture<MealBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealBrowserComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
