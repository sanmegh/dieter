import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MealCreatorComponent } from './meal-creator.page';


describe('MealCreatorComponent', () => {
  let component: MealCreatorComponent;
  let fixture: ComponentFixture<MealCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealCreatorComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
