import {Routes} from "@angular/router";
import {userRoutes} from "../../../../app/user/user.routes";
import { restaurantAdminRoutes } from "app/restaurant-admin/restauran-admin.routes";

export const appLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    /** User role */
    path: '',
    //canMatch: [CanMatchAdmin],
    children : [...userRoutes],
  },
  {
    /** Restaurant Admin role */
    path : '',
    children : [...restaurantAdminRoutes]
  }
];
