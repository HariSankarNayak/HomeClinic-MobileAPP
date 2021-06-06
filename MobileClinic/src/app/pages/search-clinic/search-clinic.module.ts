import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchClinicPageRoutingModule } from './search-clinic-routing.module';

import { SearchClinicPage } from './search-clinic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchClinicPageRoutingModule
  ],
  declarations: [SearchClinicPage]
})
export class SearchClinicPageModule {}
