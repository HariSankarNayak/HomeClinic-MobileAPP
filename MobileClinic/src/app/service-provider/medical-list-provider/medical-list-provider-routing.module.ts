import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalListProviderPage } from './medical-list-provider.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalListProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalListProviderPageRoutingModule {}
