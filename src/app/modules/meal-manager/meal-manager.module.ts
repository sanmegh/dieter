import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MealBrowserComponent } from './meal-browser/meal-browser.page';
import { MealCreatorComponent } from './meal-creator/meal-creator.page';
import { MealManagerRoutingModule } from './meal-manager-routing.module';
import { MealViewComponent } from './meal-view/meal-view.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MealManagerRoutingModule
  ],
  declarations: [
    MealCreatorComponent,
    MealBrowserComponent,
    MealViewComponent,
  ]
})
export class MealManagerModule { }
