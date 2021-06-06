import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProviderPageRoutingModule } from './register-provider-routing.module';

import { RegisterProviderPage } from './register-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProviderPageRoutingModule
  ],
  declarations: [RegisterProviderPage]
})
export class RegisterProviderPageModule {}
