import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NewUser } from '../classes/new-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* @ViewChild('logInForm')

  @ViewChild('newUserForm') */

  constructor(public loginApi: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  invalidUser: boolean = false;
  userExists: boolean = false;

  logIn(x: NgForm) {
    return this.loginApi.checkUser(x.form.value.firstName).subscribe((data: {}) => {
      if(data === null) {
        this.invalidUser = true;
        x.reset()
      } else {
          this.router.navigateByUrl('/home');
        };
      }
    )
  }

  newUser(x: NgForm) {
    let newUser: NewUser = {
      firstName: x.form.value.firstName,
      lastName: x.form.value.lastName,
      memberID: Math.random(),
      city: x.form.value.city,
      loyaltyPoints: 0,
      birthday: x.form.value.birthDay,
      phoneNumber: x.form.value.phoneNumber,
      email: x.form.value.email,
    }
    let firstName = x.form.value.firstName + "/"
    this.loginApi.checkUser(firstName).subscribe((data: {}) => {
      if (data === null) {
        this.loginApi.newUser(firstName, newUser).subscribe((data: {})=>{
          console.log(data)
          x.reset()
          this.router.navigateByUrl('/home');
        })
      }
      else {
        this.userExists = true;
        x.reset()
      }
    })
  }
  
}
