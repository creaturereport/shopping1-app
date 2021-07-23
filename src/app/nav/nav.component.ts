import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public loginApi: LoginService) { }
  ngOnInit(): void {
   let loggedInUser = this.loginApi.loggedInUser;
   console.log(loggedInUser) 

  }

}
