import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDoctorPage } from './search-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDoctorPageRoutingModule {}
