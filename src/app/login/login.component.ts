import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'angulartoastr';
  showModal: boolean;
  //registerForm: FormGroup;
  submitted = false;
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  email: string;
  password: string
  constructor(private formbuilder: FormBuilder,private router: Router,
              private apiService: ServicesService) {

        // this.loginForm = this.formbuilder.group({
        //       username: ['', Validators.required],
        //       password: ['', Validators.required]
        //         });
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

 ngOnInit(): void {
  }
//  onSubmit(){
//     // console.log(this.loginForm.value);
//     // if (this.loginForm.invalid){
//     //   return;
//     // }
//     const loginData = {
//       username: this.loginForm.controls['username'].value,
//       password: this.loginForm.controls['password'].value
//     };
    // this.usernameVal =this.loginForm.username.value,
    // this.passwordVal = this.loginForm.password.value
   
    
     // 👉️ "department"
    
    
    // if (this.loginForm.controls['username'].value == "admin" && this.loginForm.controls['password'].value 
    // == "123"  ){
    //   this.router.navigate(['adminmodule'])
    // }else{
    //   this.invalidLogin = true
    // }
    // this.apiService.login(loginData).subscribe((data: any) =>{
    // this.message = data.message;

    //   if (data.token){
    //     window.localStorage.setItem('token',data.token);
    //     this.router.navigate(['adminmodule']);
    //   }else{
    //     this.invalidLogin =true;
       
    //   }
    // })
//  }

loginMe(){
   if(this.email == "admin" && this.password == "admin123" ){
    this.router.navigate(['adminmodule']);
   }
   else{
    // this.invalidLogin
    this.invalidLogin = true
   }
  }
  
}