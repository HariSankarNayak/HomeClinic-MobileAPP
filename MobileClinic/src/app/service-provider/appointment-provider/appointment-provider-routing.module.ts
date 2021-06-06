import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentProviderPage } from './appointment-provider.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentProviderPageRoutingModule {}
