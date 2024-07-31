import { Routes } from '@angular/router';

export const AutenticateRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
];
