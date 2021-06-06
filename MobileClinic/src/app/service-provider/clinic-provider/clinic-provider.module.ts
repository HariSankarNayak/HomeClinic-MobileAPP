import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicProviderPageRoutingModule } from './clinic-provider-routing.module';

import { ClinicProviderPage } from './clinic-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicProviderPageRoutingModule
  ],
  declarations: [ClinicProviderPage]
})
export class ClinicProviderPageModule {}
