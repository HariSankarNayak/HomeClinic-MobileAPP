import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePasswordProviderPage } from './profile-password-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePasswordProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePasswordProviderPageRoutingModule {}
