import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewProviderPage } from './review-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewProviderPageRoutingModule {}
