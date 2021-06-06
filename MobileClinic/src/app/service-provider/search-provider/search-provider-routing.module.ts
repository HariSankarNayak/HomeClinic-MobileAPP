import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchProviderPage } from './search-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SearchProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchProviderPageRoutingModule {}
