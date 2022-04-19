import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  navigateToAddRestaurant() {
    this.router.navigateByUrl('/add-restaurant');
  }

  ViewRestaurant(id: any) {
    this.router.navigateByUrl(`/restaurant-details?id=${id}`);
  }

  aboutUs() {
    this.navCtrl.navigateForward('/about-us');
  }
  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }
  navigateToViewRestaurant(id:any){
    this.router.navigateByUrl(`/view-restaurant?id=${id}`)
  }
}
