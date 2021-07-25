import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(public loginApi: LoginService, private formBuilder: FormBuilder) { }

  user: User = new User;

  profileForm = this.formBuilder.group({
    userName: [""],
    firstName: [""],
    lastName: [""],
    city: [""],
    email: [""],
    phoneNumber: [""],
    birthDate: [""],
  })

  isEditing = false;

  ngOnInit(): void {
    this.user = this.loginApi.loggedInUser;
    console.log(this.user)
    
  }

  onEdit(){
    this.setPlaceholders();
    this.isEditing = true;
  }

  setPlaceholders(){
    this.profileForm.setValue({
      userName: this.user.userName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      city: this.user.city,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      birthDate: this.user.birthDate,

    })
  }

  loading = false;

  onSubmit(){
    console.log(this.profileForm)

    let payload = this.profileForm.value;
    console.log(payload)

    this.loginApi.editUser(payload, this.loginApi.loggedInUser.userName).subscribe((data: {}) => {
      console.log(data);
      this.loginApi.checkUser(this.loginApi.loggedInUser.userName).subscribe((data: User) => {
        this.loginApi.setUser(data)
        this.user = this.loginApi.loggedInUser
        console.log(data);
        this.loading = true;
      })
      setTimeout( () => {this.isEditing = false
                          this.loading = false}, 1000)
    })
  }




  
  

}
