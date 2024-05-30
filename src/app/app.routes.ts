import { Routes } from '@angular/router';
import {AppLayoutComponent} from "../infrastructure/core/layouts/app-layout/app-layout.component";
import {appLayoutRoutes} from "../infrastructure/core/layouts/app-layout/app-layout.routes";
import {LoginLayoutComponent} from "../infrastructure/core/layouts/login-layout/login-layout.component";
import {authRoutes} from "../infrastructure/auth/auth.routes";

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    //canActivate: [AuthGuard],
    children: [...appLayoutRoutes],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'authentication',
        children : [...authRoutes],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/authentication/login',
      },
    ],
  },
  { path: '**', redirectTo: 'authentication' },
];
