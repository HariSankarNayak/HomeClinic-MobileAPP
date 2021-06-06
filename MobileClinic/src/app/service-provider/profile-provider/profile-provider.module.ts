import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileProviderPageRoutingModule } from './profile-provider-routing.module';

import { ProfileProviderPage } from './profile-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileProviderPageRoutingModule
  ],
  declarations: [ProfileProviderPage]
})
export class ProfileProviderPageModule {}
