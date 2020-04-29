import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitTourPage } from './init-tour.page';

const routes: Routes = [
  {
    path: '',
    component: InitTourPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitTourPageRoutingModule { }
