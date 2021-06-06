import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDoctorPageRoutingModule } from './search-doctor-routing.module';

import { SearchDoctorPage } from './search-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDoctorPageRoutingModule
  ],
  declarations: [SearchDoctorPage]
})
export class SearchDoctorPageModule {}
