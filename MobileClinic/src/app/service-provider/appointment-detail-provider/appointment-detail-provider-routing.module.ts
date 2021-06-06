import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentDetailProviderPage } from './appointment-detail-provider.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentDetailProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentDetailProviderPageRoutingModule {}
