import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchClinicProviderPageRoutingModule } from './search-clinic-provider-routing.module';

import { SearchClinicProviderPage } from './search-clinic-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchClinicProviderPageRoutingModule
  ],
  declarations: [SearchClinicProviderPage]
})
export class SearchClinicProviderPageModule {}
