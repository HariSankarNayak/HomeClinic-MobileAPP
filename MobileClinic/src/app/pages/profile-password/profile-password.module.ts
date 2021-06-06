import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePasswordPageRoutingModule } from './profile-password-routing.module';

import { ProfilePasswordPage } from './profile-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePasswordPageRoutingModule
  ],
  declarations: [ProfilePasswordPage]
})
export class ProfilePasswordPageModule {}
