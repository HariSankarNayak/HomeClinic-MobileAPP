import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterResultProviderPageRoutingModule } from './filter-result-provider-routing.module';

import { FilterResultProviderPage } from './filter-result-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterResultProviderPageRoutingModule
  ],
  declarations: [FilterResultProviderPage]
})
export class FilterResultProviderPageModule {}
