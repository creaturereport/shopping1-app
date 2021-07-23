import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public loginApi: LoginService) { }
  user: User = new User;

  isEditing = false //boolean to determine if user is editing.

  ngOnInit(): void {
   this.user = this.loginApi.loggedInUser;
   console.log(this.user)
  }

  onEdit(){
    this.isEditing = true;
  }

}
