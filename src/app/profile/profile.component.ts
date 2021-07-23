import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { LoginService } from '../services/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public loginApi: LoginService, private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: [""],
    lastName: [""],
    city: [""],
    email: [""],
    phoneNumber: [""],
    birthDate: [""],
  })

  user: User = new User;

  isEditing = false //boolean to determine if user is editing.

  ngOnInit(): void {
   this.user = this.loginApi.loggedInUser;
   console.log(this.user)
  //  this.setPlaceholders();
  }

  onEdit(){
    this.isEditing = true;
  }

  // setPlaceholders() {
  //   this.profileForm.setValue({
  //     firstName: this.user.firstName
  //   })
  // }

}
