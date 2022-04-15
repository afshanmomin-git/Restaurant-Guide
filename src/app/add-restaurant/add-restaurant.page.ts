import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  id:any;
  name:any;
  address:any;
  number:any;
  rate:any;
  tags:any;
  comments:any;
  confirm:any;
  streetName:any;
  city:any;
  
  constructor() { }

  
  addRestaurant() {

  


  }
  onRateChange(event) {
    console.log('Your rate:', event);
  }
  
  

  ngOnInit() {
  }

}
