import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProviderPage } from './home-provider.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProviderPageRoutingModule {}
