import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProviderPage } from './register-provider.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterProviderPageRoutingModule {}
