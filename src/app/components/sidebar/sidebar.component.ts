import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'app/services.service';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Forecasting Dashboard',  icon: 'dashboard', class: '' },
    
    { path: '/analysis', title: 'Analysis Dashboard',  icon:'library_books', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  title = 'angulartoastr';
    submitted = false;
    showModal: boolean;
    loginForm: FormGroup;
    invalidLogin: boolean = false;
    message: any;
    email: string;
  password: string

  constructor(private router: Router, private apiService: ServicesService, private formbuilder: FormBuilder) { }

  ngOnInit() {
 
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
    
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

  
  loginMe(){
    if(this.email == "admin" && this.password == "admin123" ){
     // 
     this.router.navigate(['adminmodule']);
     this.showModal = false;
    }
    else{
     // this.invalidLogin
     alert("User or Password is incorrect")
    }
   }

}
