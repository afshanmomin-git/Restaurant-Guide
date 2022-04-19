import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { IonicRatingModule } from 'ionic4-rating';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  constructor(
    private restaurantService: RestaurantService,
<<<<<<< HEAD
    private router: Router,
  ) { }
    
  address:any;
  number:any;
  rate: any;
  
  comments:any;
  // confirm:any;
  streetName: any;
  city:any;
  
  success:string=''
  error:string=''
  name:string=''
=======
    private router: Router
  ) {}

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
>>>>>>> 548e81364806576821ca54c028e81e3b5a4d29f6

  success: string = '';
  error: string = '';
  name: string = '';

  description: string = '';
  tags: [];

  async addRestaurant() {
    this.restaurantService
<<<<<<< HEAD
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
  onRateChange(event) {
    console.log('Your rate:', event);
  }
  
  cancel(){
    this.router.navigateByUrl('/home')
=======
      .createRestaurant(this.name, this.description)
      .then(() => {
        this.success = 'Logged in';
        this.error = '';
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        this.error = err;
        this.success = '';
      });
>>>>>>> 548e81364806576821ca54c028e81e3b5a4d29f6
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {}
}
