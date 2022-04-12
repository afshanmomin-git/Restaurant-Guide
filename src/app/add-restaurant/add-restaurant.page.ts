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
  rating:any;
  tags:any;
  comments:any;
  confirm:any;

  streetNo:any;
  streetName:any;
  streetType:any;
  city:any;
  
  constructor() { }

  
  addRestaurant() {

  


  }
  
  

  ngOnInit() {
  }

}
