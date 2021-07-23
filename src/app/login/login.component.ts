import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f')
    loginForm!: NgForm;

  @ViewChild('signupForm')
    signupForm!: NgForm;

  constructor(public loginApi: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  isValidUser: boolean = false;
  userExists: boolean = false;

  onSubmit(form: NgForm){
    return this.loginApi.checkUser(form.value.userName).subscribe((data: {}) => {
      if(data === null) {
        this.isValidUser = true;
      } else {
          this.loginApi.setUser(data)
          console.log(this.loginApi.loggedInUser)
          this.router.navigateByUrl('/home');
        };
      }
    )
  }
  
  onSignup(form: NgForm){
    /* console.log("signup success")
    console.log(form.value) */
    let user = form.value;
    user.memberID = Math.random();
    user.loyalityPoints = 0;
    console.log(user)
    this.loginApi.checkUser(user.userName).subscribe((data: {}) =>{
      if(data === null) {

         this.loginApi.createUser(user,user.userName).subscribe((data: {}) => {
          console.log(data)
          this.loginApi.setUser(data)
          console.log(this.loginApi.loggedInUser)
          this.router.navigateByUrl('/home');
        })
      }
      else {
        this.userExists = true;
      }
    })
  }
}
