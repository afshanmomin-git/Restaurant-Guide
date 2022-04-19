import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage {
  allRestaurant: any = [];
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private RestService: RestaurantService,
    private router: Router,
    public navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    this.loader();
  }

  ngOnInit() {
    this.loader();
  }
  async loader() {
    this.allRestaurant = await this.RestService.getAllRestaurants();
  }

}
