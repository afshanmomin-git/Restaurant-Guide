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
  success: string = '';
  error: string = '';
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

 
  async removePost(){
    const details = {
      restaurantName: this.name,
      description: this.description,
      address :this.address,
      phoneNumber : this.phoneNumber,
      tags: this.tags,
    }
    this.RestService
      .deleteRestaurantById(this.restaurantId)
      .then(() => {
        this.router.navigateByUrl('/home')
      })
      .catch(err => {
        this.error = err;
        this.success = ""
      });
  }


  navigateToEditRestaurant(id: any) {
    this.router.navigateByUrl(`/edit-restaurant?id=${id}`);
  }
}
