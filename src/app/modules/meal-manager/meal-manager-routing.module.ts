import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealBrowserComponent } from './meal-browser/meal-browser.page';
import { MealCreatorComponent } from './meal-creator/meal-creator.page';
import { MealViewComponent } from './meal-view/meal-view.page';

const routes: Routes = [
  {
    path: '',
    component: MealBrowserComponent,
  },
  {
    path: 'create',
    component: MealCreatorComponent,
  },
  {
    path: ':id',
    component: MealViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealManagerRoutingModule { }
