import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public loginApi: LoginService) { }
  ngOnInit(): void {
   let loggedInUser: User = this.loginApi.loggedInUser;
   console.log(loggedInUser.userName) 

  }

}
