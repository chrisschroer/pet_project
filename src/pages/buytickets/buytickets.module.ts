import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyticketsPage } from './buytickets';

@NgModule({
  declarations: [
    BuyticketsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyticketsPage),
  ],
})
export class BuyticketsPageModule {}
