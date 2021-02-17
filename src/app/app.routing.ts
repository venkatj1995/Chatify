import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard  } from './auth.guard';




export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        redirectTo: '/dashboardhome',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'customer',
        redirectTo: '/customer',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
          canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren:
          () => import('./app-component/appcomponent.module').then(m => m.AppComponentsModule)
      },

      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      // }
    ]
  },
  { path: 'login', component: LoginComponent }

];
