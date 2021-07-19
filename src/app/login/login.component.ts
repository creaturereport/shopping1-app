import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f')
    loginForm!: NgForm;

  constructor(public loginApi: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    return this.loginApi.checkUser(form.value.userName).subscribe((data: {}) => {
      console.log(data);
    })

  }

}
