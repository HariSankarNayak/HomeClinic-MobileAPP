import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentViewPage } from './appointment-view.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentViewPageRoutingModule {}
