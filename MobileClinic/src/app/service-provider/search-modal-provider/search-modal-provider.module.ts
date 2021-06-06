import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchModalProviderPageRoutingModule } from './search-modal-provider-routing.module';

import { SearchModalProviderPage } from './search-modal-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchModalProviderPageRoutingModule
  ],
  declarations: [SearchModalProviderPage]
})
export class SearchModalProviderPageModule {}
