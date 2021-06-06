import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditProviderPage } from './profile-edit-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEditProviderPageRoutingModule {}
