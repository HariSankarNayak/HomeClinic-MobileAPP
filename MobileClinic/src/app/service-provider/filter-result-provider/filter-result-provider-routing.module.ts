import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterResultProviderPage } from './filter-result-provider.page';

const routes: Routes = [
  {
    path: '',
    component: FilterResultProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterResultProviderPageRoutingModule {}
