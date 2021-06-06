import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotProviderPageRoutingModule } from './forgot-provider-routing.module';

import { ForgotProviderPage } from './forgot-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotProviderPageRoutingModule
  ],
  declarations: [ForgotProviderPage]
})
export class ForgotProviderPageModule {}
