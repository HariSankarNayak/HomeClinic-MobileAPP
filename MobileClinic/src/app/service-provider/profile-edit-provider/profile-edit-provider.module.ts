import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditProviderPageRoutingModule } from './profile-edit-provider-routing.module';

import { ProfileEditProviderPage } from './profile-edit-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditProviderPageRoutingModule
  ],
  declarations: [ProfileEditProviderPage]
})
export class ProfileEditProviderPageModule {}
