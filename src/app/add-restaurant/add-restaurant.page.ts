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
    private router: Router,
  ) { }

  // id:any;
  // name:any;
  // address:any;
  // number:any;
  // rating:any;
  // tags:any;
  // comments:any;
  // confirm:any;

  // streetNo:any;
  // streetName:any;
  // streetType:any;
  // city:any;
  
  success:string=''
  error:string=''
  name:string=''

  description: string=''
  tags:[]




  
  async addRestaurant() {
    this.restaurantService
    .createRestaurant(
      this.name,
      this.description,
    )
    .then(() => {
      this.success = "Logged in";
      this.error = "";
      this.router.navigateByUrl('/home')
    })
    .catch(err => {
      this.error = err;
      this.success = ""
    });
  


  }
  
  cancel(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }

}
