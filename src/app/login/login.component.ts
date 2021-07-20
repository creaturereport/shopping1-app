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
  /* @ViewChild('f')
  loginForm!: NgForm; */

  constructor(public loginApi: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  invalidUser: boolean = false;

  /* onSubmit(form: NgForm){
    return this.loginApi.checkUser(form.value.userName).subscribe((data: {}) => {
      if(data === null) {
        this.invalidUser = true;
      } else {
          this.router.navigateByUrl('/home');
        };
      }
    )
  } */

  logIn(x: any) {
    console.log(x);
    console.log(x.form.value);
    x.reset
  }

  newUser(x: any) {
    console.log(x)
    console.log(x.form.value)
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
    console.log(newUser)
    x.reset()
  }

}
