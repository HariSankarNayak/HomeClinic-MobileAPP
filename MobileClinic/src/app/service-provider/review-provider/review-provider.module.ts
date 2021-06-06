import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewProviderPageRoutingModule } from './review-provider-routing.module';

import { ReviewProviderPage } from './review-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewProviderPageRoutingModule
  ],
  declarations: [ReviewProviderPage]
})
export class ReviewProviderPageModule {}
