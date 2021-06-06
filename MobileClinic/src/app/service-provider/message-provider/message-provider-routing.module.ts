import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageProviderPage } from './message-provider.page';

const routes: Routes = [
  {
    path: '',
    component: MessageProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageProviderPageRoutingModule {}
