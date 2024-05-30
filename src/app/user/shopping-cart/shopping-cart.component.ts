import { Component, OnInit } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { Dish } from '../orders/orders-recepies/orders-recepies.component';
import { ShoppingCartService } from './shopping-cart.service';
import { SearchRecipesAutocompleteComponent } from '../ui/search-recipes-autocomplete/search-recipes-autocomplete.component';
import { ButtonComponent } from 'infrastructure/ui/button/button.component';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { AlertService } from 'infrastructure/shared/services/alert.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';



@Component({
  selector: 'sf-shopping-cart',
  standalone: true,
  imports: [OrderListModule,ButtonComponent, DataViewModule, CommonModule,IconFieldModule, InputIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
dishesInCart: Dish[] = [];
totalPrice : number = 0;

clearCart() {
  this.dishesInCart = [];
}


constructor (
  private _sc : ShoppingCartService,
  private _alertService : AlertService,
  private router: Router
) {}

  ngOnInit() {
    this.dishesInCart= this._sc.getDishesInCart();
    this.totalPrice= this._sc.calculateTotalPrice();
   
  }

  orderNow() {
      this._sc.clearCart();
      this.clearCart(); 
      this._alertService.addSuccessMsg("Your order has been sent :)"),
      this.router.navigate (['/orders'])
    
      }
      
      deleteDish(index: number){
   this._sc.deleteDish(index);
   this.dishesInCart=this._sc.getDishesInCart();
   this.totalPrice = this._sc.calculateTotalPrice();


}
}