import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultProviderPageRoutingModule } from './result-provider-routing.module';

import { ResultProviderPage } from './result-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultProviderPageRoutingModule
  ],
  declarations: [ResultProviderPage]
})
export class ResultProviderPageModule {}
