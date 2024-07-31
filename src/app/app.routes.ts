import { Routes } from '@angular/router';
import { AutenticateRoutes } from './features/authenticate/autenticate.routes';

export const routes: Routes = [
  ...AutenticateRoutes,
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
