import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalListPage } from './medical-list.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalListPageRoutingModule {}
