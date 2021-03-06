import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  public async createRestaurant(restaurantName: string, description: string,address : string, phoneNumber : string,tags: string[]) {
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
      address,
      phoneNumber,
      tags,
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
      address: any;
      phoneNumber : any;
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

  public async deleteRestaurantById(id: number) {
    const allRestaurants = await this.getAllRestaurants();
    const restaurants = allRestaurants.filter(restaurant => restaurant.id !== id);
    await Storage.set({key:"restaurants", value:JSON.stringify(restaurants)});
    return true;
  }
  public async searchRestaurants(searchValue: string) {
    const allRestaurants = await this.getAllRestaurants();
    const restaurants = allRestaurants.filter(restaurant => {
      restaurant.restaurantName.toLowerCase().includes(searchValue.toLowerCase()) ||
      restaurant.tags.findIndex(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))
    });
    return restaurants;
  }
}
