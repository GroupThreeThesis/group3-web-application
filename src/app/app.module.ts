import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Free
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import { HighchartsChartModule } from 'highcharts-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr'
import { NgbToastModule } from  'ngb-toast';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFileUploadModule,
    HighchartsChartModule,
   // AgmCoreModule.forRoot({
    //  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
  //  }),
    MDBBootstrapModule.forRoot(),
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgbToastModule
      
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
   ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
