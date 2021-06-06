import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchClinicPage } from './search-clinic.page';

const routes: Routes = [
  {
    path: '',
    component: SearchClinicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchClinicPageRoutingModule {}
