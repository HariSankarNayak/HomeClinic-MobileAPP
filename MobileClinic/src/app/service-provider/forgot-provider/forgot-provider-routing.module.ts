import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotProviderPage } from './forgot-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotProviderPageRoutingModule {}
