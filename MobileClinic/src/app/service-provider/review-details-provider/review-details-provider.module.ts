import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewDetailsProviderPageRoutingModule } from './review-details-provider-routing.module';

import { ReviewDetailsProviderPage } from './review-details-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewDetailsProviderPageRoutingModule
  ],
  declarations: [ReviewDetailsProviderPage]
})
export class ReviewDetailsProviderPageModule {}
