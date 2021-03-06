/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}



  success: string = '';
  error: string = '';
  name: string = '';
  description: string = '';
  address : string = '';
  phoneNumber : string = '';
  tags: [];
  rating: any;
  async addRestaurant() {
    this.restaurantService
      .createRestaurant(this.name, this.description,this.address,this.phoneNumber, this.tags, )
      .then(() => {
        this.success = 'Saved';
        this.error = '';
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        this.error = err;
        this.success = '';
      });
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }
  onRateChange(rating) {
    this.rating = rating;
  }

  ngOnInit() {}
}
