import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemBrowserComponent } from './item-browser/item-browser.page';
import { ItemCreatorComponent } from './item-creator/item-creator.page';
import { ItemManagerComponent } from './item-manager.page';
import { ItemViewComponent } from './item-view/item-view.page';

const routes: Routes = [
  {
    path: '',
    component: ItemBrowserComponent, //ItemManagerComponent,
  },
  {
    path: 'browse',
    component: ItemBrowserComponent,
  },
  {
    path: 'create',
    component: ItemCreatorComponent,
  },
  {
    path: ':id',
    component: ItemViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemManagerRoutingModule { }
