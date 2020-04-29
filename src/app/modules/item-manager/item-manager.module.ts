import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemBrowserComponent } from './item-browser/item-browser.page';
import { ItemCreatorComponent } from './item-creator/item-creator.page';
import { ItemManagerRoutingModule } from './item-manager-routing.module';
import { ItemViewComponent } from './item-view/item-view.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemManagerRoutingModule
  ],
  declarations: [
    ItemBrowserComponent,
    ItemCreatorComponent,
    ItemViewComponent,
  ]
})
export class ItemManagerModule { }
