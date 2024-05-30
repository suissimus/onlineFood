import { Component, Inject, Input } from '@angular/core';
import { ButtonComponent } from 'infrastructure/ui/button/button.component';
import { Dish } from '../orders-recepies.component';
import { ShoppingCartService } from 'app/user/shopping-cart/shopping-cart.service';
import { AlertService } from 'infrastructure/shared/services/alert.service';

@Component({
  selector: 'sf-orders-recepies-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './orders-recepies-card.component.html',
  styleUrl: './orders-recepies-card.component.scss'
})
export class OrdersRecepiesCardComponent {
  @Input() dish: Dish | undefined;
  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _alertService : AlertService,
  )
  {

  } 
addToShoppingCart(){
  this._shoppingCartService.addToCart(this.dish!);
  this._alertService.addSuccessMsg("Added to shopping cart!")
}
}
