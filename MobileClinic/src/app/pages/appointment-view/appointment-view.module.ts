import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentViewPageRoutingModule } from './appointment-view-routing.module';

import { AppointmentViewPage } from './appointment-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentViewPageRoutingModule
  ],
  declarations: [AppointmentViewPage]
})
export class AppointmentViewPageModule {}
