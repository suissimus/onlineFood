import {Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const authRoutes : Routes = [
  {
    path : '',
    children : [
      {
        path : '',
        pathMatch : 'full',
        redirectTo : 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
