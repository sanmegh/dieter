import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'logs',
        loadChildren: () => import('../log-manager/log-manager.module').then(m => m.LogManagerModule)
      },
      {
        path: 'meals',
        loadChildren: () => import('../meal-manager/meal-manager.module').then(m => m.MealManagerModule)
      },
      {
        path: 'items',
        loadChildren: () => import('../item-manager/item-manager.module').then(m => m.ItemManagerModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        loadChildren: () => import('../log-manager/log-manager.module').then(m => m.LogManagerModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
