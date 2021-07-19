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

  constructor(public loginApi: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  isValidUser: boolean = false;

  onSubmit(form: NgForm){
    return this.loginApi.checkUser(form.value.userName).subscribe((data: {}) => {
      if(data === null) {
        this.isValidUser = true;
      } else {
          this.router.navigateByUrl('/home');
        };
      }
    )
  }
}
