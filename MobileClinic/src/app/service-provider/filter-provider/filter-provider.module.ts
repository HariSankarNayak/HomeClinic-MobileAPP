import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterProviderPageRoutingModule } from './filter-provider-routing.module';

import { FilterProviderPage } from './filter-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterProviderPageRoutingModule
  ],
  declarations: [FilterProviderPage]
})
export class FilterProviderPageModule {}
