import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAddressProviderPageRoutingModule } from './profile-address-provider-routing.module';

import { ProfileAddressProviderPage } from './profile-address-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAddressProviderPageRoutingModule
  ],
  declarations: [ProfileAddressProviderPage]
})
export class ProfileAddressProviderPageModule {}
