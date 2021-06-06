import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProviderPageRoutingModule } from './home-provider-routing.module';

import { HomeProviderPage } from './home-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProviderPageRoutingModule
  ],
  declarations: [HomeProviderPage]
})
export class HomeProviderPageModule {}
