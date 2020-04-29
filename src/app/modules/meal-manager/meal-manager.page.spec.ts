import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MealManagerComponent } from './meal-manager.page';


describe('MealManagerComponent', () => {
  let component: MealManagerComponent;
  let fixture: ComponentFixture<MealManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealManagerComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
