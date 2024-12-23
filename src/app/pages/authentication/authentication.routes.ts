import { Routes } from '@angular/router';

import { AppErrorComponent } from './error/error.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { AppLoginComponent } from './login/login.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error',
        component: AppErrorComponent
      },

      {
        path: 'login',
        component: AppLoginComponent
      },
      {
        path: 'register',
        component: AppSideRegisterComponent
      }
    ]
  }
];
