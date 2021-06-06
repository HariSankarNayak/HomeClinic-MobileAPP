import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewDetailsPage } from './review-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewDetailsPageRoutingModule {}
