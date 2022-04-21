import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage  {

  constructor(private router: Router){}
  
  navigateToHome(){
    this.router.navigate(["/home"])
  }

}
