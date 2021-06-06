import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageProviderPageRoutingModule } from './message-provider-routing.module';

import { MessageProviderPage } from './message-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageProviderPageRoutingModule
  ],
  declarations: [MessageProviderPage]
})
export class MessageProviderPageModule {}
