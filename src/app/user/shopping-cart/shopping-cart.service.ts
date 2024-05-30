import { Injectable } from '@angular/core';
import { Dish } from '../orders/orders-recepies/orders-recepies.component';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  /** Props */
  dishesInCart: Dish[] = [];
  
  clearCart() {
    this.dishesInCart = [];
  }

  addToCart(dish: Dish) {
    this.dishesInCart.push(dish);
  }
  
  getDishesInCart() {
    return this.dishesInCart;
  }

  deleteDish(index: number) {
    this.dishesInCart.splice(index, 1);
  }

  calculateTotalPrice(): number {
    // let totalPrice = 0;
    // for (const dish of this.dishesInCart) {
    //   totalPrice+= dish.price;
    //   console.log('Total:', dish.price);
    // }
    // return totalPrice;
    return this.dishesInCart.filter(x => x.price).reduce((x, y) => x + y.price, 0);
  }
}
