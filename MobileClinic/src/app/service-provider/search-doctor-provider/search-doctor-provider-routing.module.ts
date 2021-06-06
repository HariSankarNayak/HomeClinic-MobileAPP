import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDoctorProviderPage } from './search-doctor-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDoctorProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDoctorProviderPageRoutingModule {}
