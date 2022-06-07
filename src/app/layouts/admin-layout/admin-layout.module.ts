import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypographyComponent } from '../../typography/typography.component';
import { AdminmoduleComponent } from 'app/adminmodule/adminmodule.component';



import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from 'app/login/login.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AnalysisComponent } from 'app/analysis/analysis.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HighchartsChartModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,

  ],
  declarations: [
    DashboardComponent,
    TypographyComponent,
    AdminmoduleComponent,
    LoginComponent,
    AnalysisComponent
   
  ]
})

export class AdminLayoutModule {}
