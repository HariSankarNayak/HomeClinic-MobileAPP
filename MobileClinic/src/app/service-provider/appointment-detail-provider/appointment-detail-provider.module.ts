import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentDetailProviderPageRoutingModule } from './appointment-detail-provider-routing.module';

import { AppointmentDetailProviderPage } from './appointment-detail-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentDetailProviderPageRoutingModule
  ],
  declarations: [AppointmentDetailProviderPage]
})
export class AppointmentDetailProviderPageModule {}
