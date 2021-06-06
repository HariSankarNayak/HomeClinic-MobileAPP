import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentViewProviderPage } from './appointment-view-provider.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentViewProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentViewProviderPageRoutingModule {}
