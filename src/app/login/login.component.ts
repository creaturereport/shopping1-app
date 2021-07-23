import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f')
    loginForm!: NgForm;

  @ViewChild('signUpForm')
    signUpForm!: NgForm;

  constructor(public loginApi: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  isValidUser: boolean = false;
  currentUser: boolean = false;

  onSubmit(form: NgForm){
    return this.loginApi.checkUser(form.value.userName).subscribe((data: {}) => {
      console.log(data);
      if(data === null) {
        this.isValidUser = true;
      }
      else { 
        this.loginApi.setUser(data)
        console.log(this.loginApi.loggedInUser)
        this.router.navigateByUrl('/home');
      }
    })
  }

  onSignup(form: NgForm) {
    let user = form.value;
    console.log(form.value);
    user.memberID = Math.random();
    user.loyalityPoints = 0;
    this.loginApi.checkUser(user.userName).subscribe((data: {}) => {
      if(data === null) {
        this.loginApi.createUser(user, user.userName).subscribe((data: {})=> {
          this.router.navigateByUrl('/home');
        })
      }
      else {
        this.currentUser = true;
      }
    })
  }

}
