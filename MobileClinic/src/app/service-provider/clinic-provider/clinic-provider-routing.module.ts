import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicProviderPage } from './clinic-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicProviderPageRoutingModule {}
