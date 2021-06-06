import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePasswordProviderPageRoutingModule } from './profile-password-provider-routing.module';

import { ProfilePasswordProviderPage } from './profile-password-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePasswordProviderPageRoutingModule
  ],
  declarations: [ProfilePasswordProviderPage]
})
export class ProfilePasswordProviderPageModule {}
