import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from 'ionic4-rating';

import { AddRestaurantPage } from './add-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: AddRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRestaurantPageRoutingModule {}
