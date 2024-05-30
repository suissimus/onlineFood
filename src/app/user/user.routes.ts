import {Routes} from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

export const userRoutes : Routes = [
  {
    path : '',
    children: [
      {
        path : '',
        redirectTo : 'orders',
        pathMatch : 'full',
      },
      {
        path: 'orders',
        component : OrdersComponent
      },
      {
        path: 'shopping-cart',
        component : ShoppingCartComponent
      },
    ]
  }
];
