import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinScreenPage } from './pin-screen';

@NgModule({
  declarations: [
    PinScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(PinScreenPage),
  ],
  exports: [
    PinScreenPage
  ]
})
export class PinScreenPageModule {}
