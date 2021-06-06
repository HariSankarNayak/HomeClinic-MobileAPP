import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDoctorProviderPageRoutingModule } from './search-doctor-provider-routing.module';

import { SearchDoctorProviderPage } from './search-doctor-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDoctorProviderPageRoutingModule
  ],
  declarations: [SearchDoctorProviderPage]
})
export class SearchDoctorProviderPageModule {}
