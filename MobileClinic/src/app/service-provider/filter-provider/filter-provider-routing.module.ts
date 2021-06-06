import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterProviderPage } from './filter-provider.page';

const routes: Routes = [
  {
    path: '',
    component: FilterProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterProviderPageRoutingModule {}
