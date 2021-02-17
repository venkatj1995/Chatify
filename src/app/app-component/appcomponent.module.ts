import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutes } from './appcomponent.routing';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CustomerComponent } from './customer/customer.component';





// import {
//   DialogComponent,
//   DialogOverviewExampleDialogComponent
// } from './dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  // entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    DashboardhomeComponent,
    CustomerComponent,
  
  ]
})
export class AppComponentsModule {}
