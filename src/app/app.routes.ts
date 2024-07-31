import { Routes } from '@angular/router';
import { AutenticateRoutes } from './features/autenticate/autenticate.routes';

export const routes: Routes = [
  ...AutenticateRoutes,
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
