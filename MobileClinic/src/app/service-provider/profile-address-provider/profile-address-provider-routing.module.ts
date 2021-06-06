import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAddressProviderPage } from './profile-address-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAddressProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAddressProviderPageRoutingModule {}
