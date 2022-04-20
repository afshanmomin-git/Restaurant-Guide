/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.page.html',
  styleUrls: ['./edit-restaurant.page.scss'],
})
export class EditRestaurantPage implements OnInit {
  success: string = '';
  error: string = '';
  url = new URLSearchParams(window.location.search);
  restaurantId = Number(this.url.get('id'));
  restaurant: any;
  name: String = '';
  address: String = '';
  description: String = '';
  phoneNumber : String = '';
  tags: [];

  constructor(
    private RestService: RestaurantService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  async ngOnInit() {
    this.restaurant = await this.RestService.getRestaurantById(
      this.restaurantId
    );
    this.name = this.restaurant.restaurantName;
    this.address = this.restaurant.address;
    this.description = this.restaurant.description;
    this.phoneNumber = this.restaurant.phoneNumber;
    this.tags = this.restaurant.tags;
  }
  async handleSave(){
    const details = {
      restaurantName: this.name,
      description: this.description,
      address :this.address,
      phoneNumber : this.phoneNumber,
      tags: this.tags,
    }
    this.RestService
      .editRestaurant(this.restaurantId,details)
      .then(() => {
        this.success = "Saved";
        this.error = "";
        this.router.navigateByUrl('/list')
      })
      .catch(err => {
        this.error = err;
        this.success = ""
      });
  }
  cancel() {
    this.router.navigateByUrl('/home');
  }
}

