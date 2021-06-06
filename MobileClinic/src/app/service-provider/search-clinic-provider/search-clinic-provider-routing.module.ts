import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchClinicProviderPage } from './search-clinic-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SearchClinicProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchClinicProviderPageRoutingModule {}
