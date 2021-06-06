import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchProviderPageRoutingModule } from './search-provider-routing.module';

import { SearchProviderPage } from './search-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchProviderPageRoutingModule
  ],
  declarations: [SearchProviderPage]
})
export class SearchProviderPageModule {}
