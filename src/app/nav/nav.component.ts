import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedInUser = "";
  constructor(public loginApi: LoginService) { }
  ngOnInit(): void {

   this.loggedInUser = this.loginApi.loggedInUser.userName;
   console.log(this.loggedInUser);

  }

}
