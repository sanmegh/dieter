import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InitTourPageRoutingModule } from './init-tour-routing.module';
import { InitTourPage } from './init-tour.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InitTourPageRoutingModule
  ],
  declarations: [InitTourPage]
})
export class InitTourPageModule { }
