import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentProviderPageRoutingModule } from './appointment-provider-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';


import { AppointmentProviderPage } from './appointment-provider.page';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentProviderPageRoutingModule,
    CalModalPageModule,
    NgCalendarModule
  ],
  declarations: [AppointmentProviderPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-IN' }
  ]
})
export class AppointmentProviderPageModule {}
