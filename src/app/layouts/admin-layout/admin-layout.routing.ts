import { Routes } from '@angular/router';
import { AdminmoduleComponent } from 'app/adminmodule/adminmodule.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { AnalysisComponent } from 'app/analysis/analysis.component';

//import { UpdateComponent } from 'app/update/update.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    {path: 'adminmodule',          component: AdminmoduleComponent},
    {path: 'analysis',          component: AnalysisComponent}
    
];
