import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full' // Redirect to the login page by default
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/firm',
        pathMatch: 'full'
      },
      {
        path: 'firm',
        loadChildren: () =>
          import('./pages/tables.routes').then(m => m.TablesRoutes)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            m => m.AuthenticationRoutes
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication/error'
  }
];
