import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchModalProviderPage } from './search-modal-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SearchModalProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchModalProviderPageRoutingModule {}
