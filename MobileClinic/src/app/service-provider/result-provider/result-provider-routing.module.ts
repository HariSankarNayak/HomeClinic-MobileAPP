import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultProviderPage } from './result-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ResultProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultProviderPageRoutingModule {}
