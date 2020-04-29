import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogBrowserComponent } from './log-browser/log-browser.page';
import { LogManagerRoutingModule } from './log-manager-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LogBrowserComponent }]),
    LogManagerRoutingModule,
  ],
  declarations: [
    LogBrowserComponent,
  ]
})
export class LogManagerModule { }
