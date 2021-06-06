import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAddressPageRoutingModule } from './profile-address-routing.module';

import { ProfileAddressPage } from './profile-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAddressPageRoutingModule
  ],
  declarations: [ProfileAddressPage]
})
export class ProfileAddressPageModule {}
