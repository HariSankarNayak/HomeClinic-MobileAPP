import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalListProviderPageRoutingModule } from './medical-list-provider-routing.module';

import { MedicalListProviderPage } from './medical-list-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalListProviderPageRoutingModule
  ],
  declarations: [MedicalListProviderPage]
})
export class MedicalListProviderPageModule {}
