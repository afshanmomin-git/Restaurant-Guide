import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantPageRoutingModule } from './add-restaurant-routing.module';
import { IonicRatingModule } from 'ionic-rating';

import { AddRestaurantPage } from './add-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRestaurantPageRoutingModule,
    IonicRatingModule,
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
