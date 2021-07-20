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

  logIn(x: NgForm) {
    //console.log(x);
    //console.log(x.form.value.firstName);
    return this.loginApi.checkUsers().subscribe((data: {}) => {
      //console.log(data)
      let users = []
      for (let keys of Object.values(data)) {
        //console.log(keys)
        let yup: any = keys
        //console.log(yup.firstName)
        users.push(yup.firstName)
      }
      //console.log(users)
      if (users.includes(x.form.value.firstName)) {
        console.log("yep")
        this.invalidUser = false;
      }
      else {
        console.log("nope")
        this.invalidUser = true;
      }
      }
    )
    /* return this.loginApi.checkUser(x.form.value.firstName).subscribe((data: {}) => {
      if(data === null) {
        this.invalidUser = true;
      } else {
          this.router.navigateByUrl('/home');
        };
      }
    ) */
    /* x.reset() */
  }

  newUser(x: NgForm) {
    //console.log(x)
    //console.log(x.form.value)
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
    //console.log(newUser)
    return this.loginApi.newUser(newUser).subscribe((data: {})=>{
      //console.log(data)
    })
    /* x.reset() */
  }

}
