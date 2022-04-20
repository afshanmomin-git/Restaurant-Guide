import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  public async createRestaurant(restaurantName: string, description: string) {
    const temp = await Storage.get({ key: 'restaurants' });
    let allRestaurants = temp.value ? JSON.parse(temp.value) : [];
    const restaurantWithSameName = allRestaurants.find(
      (restaurant) => restaurant.restaurantName === restaurantName
    );
    if (restaurantWithSameName !== undefined) {
      throw 'Restaurant name is taken';
    }
    const id = allRestaurants.length + 1;
    allRestaurants.push({
      id,
      restaurantName,
      description,
    });
    await Storage.set({
      key: 'restaurants',
      value: JSON.stringify(allRestaurants),
    });
  }

  public async getAllRestaurants() {
    const restaurant = await Storage.get({ key: 'restaurants' });
    return JSON.parse(restaurant.value);
  }

  public async getRestaurantById(id: number) {
    const restaurants = await this.getAllRestaurants();

    return restaurants.find((restaurant) => restaurant.id === id);
  }

  public async editRestaurant(
    id: number,
    details: {
      restaurantName: any;
      description: any;
    }
  ) {
    const restaurants = await this.getAllRestaurants();
    const restaurantIndex = restaurants.findIndex(
      (restaurant) => restaurant.id === id
    );
    if (restaurantIndex === undefined) {
      throw 'Restaurant id is wrong';
    }
    restaurants[restaurantIndex] = {
      id,
      ...details,
    };
    await Storage.set({
      key: 'restaurants',
      value: JSON.stringify(restaurants),
    });
    return restaurants[restaurantIndex];
  }
}
