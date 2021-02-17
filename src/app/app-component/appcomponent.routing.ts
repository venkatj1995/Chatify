import { Routes } from '@angular/router';

import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import{ CustomerComponent } from './customer/customer.component'
import { AuthGuard } from '../auth.guard';




export const AppRoutes: Routes = [
  {
    path: 'dashboardhome',
    component: DashboardhomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard]

  },
 
];

