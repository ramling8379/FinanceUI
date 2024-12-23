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
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./pages/pages.routes').then(m => m.PagesRoutes)
      },
      {
        path: 'tables',
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
