import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalListPageRoutingModule } from './medical-list-routing.module';

import { MedicalListPage } from './medical-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalListPageRoutingModule
  ],
  declarations: [MedicalListPage]
})
export class MedicalListPageModule {}
