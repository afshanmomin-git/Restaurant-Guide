import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.page.html',
  styleUrls: ['./view-restaurant.page.scss'],
})
export class ViewRestaurantPage implements OnInit {
  edit: Boolean = false;
  name: String = '';
  description: String = '';
 
  address: String = '';
  phoneNumber: String = '';
  tags: String = '';
  restaurant: any = {};

  constructor(
    private RestService: RestaurantService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  url = new URLSearchParams(window.location.search);
  restaurantId = Number(this.url.get('id'));
  async ngOnInit() {
    this.restaurant = await this.RestService.getRestaurantById(
      this.restaurantId
    );
    this.name = this.restaurant.restaurantName;
    this.address = this.restaurant.address;
    this.description = this.restaurant.description;
    this.phoneNumber = this.restaurant.phoneNumber;
  }
  cancel() {
    this.router.navigateByUrl('/home');
  }

  goToLocation() {}

  navigateToEditRestaurant(id: any) {
    this.router.navigateByUrl(`/edit-restaurant?id=${id}`);
  }
}
