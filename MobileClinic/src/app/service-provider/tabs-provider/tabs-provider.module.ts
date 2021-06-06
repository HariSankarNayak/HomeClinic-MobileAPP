import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsProviderPageRoutingModule } from './tabs-provider-routing.module';

import { TabsProviderPage } from './tabs-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsProviderPageRoutingModule
  ],
  declarations: [TabsProviderPage]
})
export class TabsProviderPageModule {}
